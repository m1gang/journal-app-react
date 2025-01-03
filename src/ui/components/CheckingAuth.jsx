import { CircularProgress, circularProgressClasses, Grid } from "@mui/material"
import { hatch } from 'ldrs'

hatch.register();

export const CheckingAuth = () => {
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
                direction='row'
                justifyContent='center'
            >
                <l-hatch
                    size="28"
                    stroke="4"
                    speed="3.5"
                    color="white"
                ></l-hatch>
            </Grid>
        </Grid>
    )
}
