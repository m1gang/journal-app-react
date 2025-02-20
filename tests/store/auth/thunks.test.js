import { checkingCredentials } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";

jest.mock("../../../src/firebase/providers")

describe('Pruebas en AuthThunks', () => { 
    test('debe invocar el checkingCredentials', async() => {
        const dispatch = jest.fn();
        await checkingAuthentication()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        
    });
})