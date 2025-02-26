import { signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/thunks";
import { demoUser } from "../../fiixtures/authFixtures";

jest.mock("../../../src/firebase/providers")

describe('Pruebas en AuthThunks', () => { 
    
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('debe invocar el checkingCredentials', async() => {
        await checkingAuthentication()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        
    });

    test('startGoogleSignIn debe de llamar a checkingCredentials y Login - Correcto', async() => {
      
        const loginData = {ok: true, ...demoUser};
        await signInWithGoogle.mockResolvedValue(loginData);

        //thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })

    test('startGoogleSignIn debe de llamar a checkingCredentials y Login - Error', async() => {
      
        const loginData = {ok: false, errorMessage: 'Error en el inicio de Google'};
        await signInWithGoogle.mockResolvedValue(loginData);

        //thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    })
    
})
4