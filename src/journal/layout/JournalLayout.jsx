import { Box } from "@mui/material"

const drawerWidth = 240;

// eslint-disable-next-line react/prop-types
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:"flex"}}>

        {/* Navbar */}

        {/* SideBar */}

        <Box 
        component='main'
        sx={{flexGrow:1, p:3}}
        >
            {/* Toolbar */}

            {children}

        </Box>

    </Box>
  )
}
