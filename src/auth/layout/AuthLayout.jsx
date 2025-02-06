import { Grid, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({children, title = ''}) => {
    return (

        <Grid
            className="bg-animation"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', padding: 4 }}
        >
            <Grid
                item
                className="box-shadow"
                xs={3}
                sx={{ 
                    backgroundColor: 'white', 
                    padding: 3, 
                    borderRadius: 2,
                    width: {md: 450}
                 }}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

                {children}
            </Grid>
        </Grid>

                )
}
