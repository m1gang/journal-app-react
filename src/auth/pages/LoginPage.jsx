import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link, Grid2, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { useMemo } from "react"

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'miguelangelyv1@gmail.com',
    password: '123456'
  });

  const isAuthenticating = useMemo(() => status == 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  return (

    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2 }}>

            <Grid2 item xs={12} sm={12}
              display={!!errorMessage ? 'flex' : 'none'}
              sx={{
                border: '0.5px solid red',
                borderRadius: '5px',
                width: '100%',
                marginLeft: '16px'
              }}
            >
              <Alert severity="error" sx={{ width: '100%' }}>{errorMessage}</Alert>
            </Grid2>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
                variant="outlined"
                fullWidth
              >
                <Google /> <Typography ml={1}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear un cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>


  )
}
