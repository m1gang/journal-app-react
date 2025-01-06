import { BrowserRouter as Router } from "react-router"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"
//17 - JournalApp  - MaterialUI - Estructura y Diseño
//19 - Introducción a Redux y autenticación en Firebase
export const JournalApp = () => {
  return (
    <>
      <Router>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </Router>
    </>
  )
}
