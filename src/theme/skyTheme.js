import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const skyTheme = createTheme({
    palette:{
        primary:{
            main: '#0c3a2e'
        },
        secondary:{
            main: '#0476c9'
        },
        error:{
            main: red.A400
        }
    }
})
