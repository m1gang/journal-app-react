import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fiixtures/authFixtures";

jest.mock("../../../src/firebase/providers")

describe('Pruebas en AuthThunks', () => { 
    
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('debe invocar el checkingCredentials', async() => {
        await checkingAuthentication()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        
    });

    test('startGoogleSignIn debe de llamar a checkingCredentials y Login - Exito', async() => {
      
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

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Exito', async() => {
        const loginData = {ok: true, ...demoUser};
        const formData = {email: demoUser.email, password:'123456'};

        await loginWithEmailPassword.mockResolvedValue( loginData );

        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })

    // test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Error', async() => {
    //     const loginData = {ok: false, errorMessage: 'Error en el inicio de sesion'};
    //     const formData = {};
    //     await loginWithEmailPassword.mockResolvedValue( loginData );

    //     await startLoginWithEmailPassword(formData)(dispatch);

    //     expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    //     expect(dispatch).toHaveBeenCalledWith(login(loginData.errorMessage));
    // })
    
    test('startLogout debe llamar logoutFirebase, clearNotes y logout', async() => {
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());
    })
    
    
})
4