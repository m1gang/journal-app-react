import { Button, Grid, TextField, Typography, Link, Alert, Grid2 } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router"
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  displayName: 'migatoSEnsei',
  email: 'miguelangelyv2@gmail.com',
  password: '123456',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status == 'checking', [status]);

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, displayName, email, password, onInputChange,
    formValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!formValid) return;
    console.log(formState)
    dispatch(startCreatingUserWithEmailPassword(formState))
  }


  return (
    <AuthLayout title="Register">
      
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>


          <Grid container spacing={2} sx={{ mt: 2 }}>

            <Grid2 item xs={12} sm={12}
              display={!!errorMessage ? 'flex' : 'none'}
              sx={{
                border: '1px solid red',
                borderRadius: '5px',
                width:'100%',
                marginLeft:'16px'
              }}
            >
              <Alert severity="error" sx={{ width: '100%' }}>{errorMessage}</Alert>
            </Grid2>


            <Grid item xs={12} sm={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth>
                Crear Cuenta
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
