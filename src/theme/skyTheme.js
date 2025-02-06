import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const skyTheme = createTheme({
    palette:{
        primary:{
            main: '#262254'
        },
        secondary:{
            main: '#543384'
        },
        error:{
            main: red.A400
        }
    }
})
