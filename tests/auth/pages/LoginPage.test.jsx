import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../../../src/store/auth"
import { MemoryRouter } from "react-router"
import { notAuthenticatedState } from "../../fiixtures/authFixtures"

const mockStartGoogleSignIn = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

describe('Pruebas en <LoginPage/>', () => {
    test('debe de mostrar el componente correctamente', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        // screen.debug();
        expect( screen.getAllByText('Login').length ).toBeGreaterThan(1);

    })

    test('Boton de google debe de llamar el startGoogleSignIn', () => { 
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
       
    
        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);
        expect( mockStartGoogleSignIn ).toHaveBeenCalled();
        
    
     })

     test('submit debe llamar startLoginWithEmailPassword', () => {
        
        const email = "migangD3V@gmail.com";
        const password = "123456";
        
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', { name: 'Correo' });
        fireEvent.change(emailField, { target: { name: 'email', value: email } });
        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: password } });
        
        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm);
     })
     

})


