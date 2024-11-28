import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { skyTheme } from './';


// eslint-disable-next-line react/prop-types
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ skyTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
