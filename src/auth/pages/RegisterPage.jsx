import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router"
import { useForm } from "../../hooks/useForm";

const formData = {
  displayName: 'Miguel YV',
  email:'miguelangelyv1@gmail.com',
  password: '123456',
}

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    
  }
  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
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
            <Grid item xs={12} sm={12}>
              <Button 
              type="submit"
              variant="contained" 
              fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
            
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{mt:2}}>
            <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
