import { BrowserRouter as Router } from "react-router"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"


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
