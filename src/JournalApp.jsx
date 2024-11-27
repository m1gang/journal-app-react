import { BrowserRouter as Router } from "react-router"
import { AppRouter } from "./router/AppRouter"


export const JournalApp = () => {
  return (
    <>
    <Router>    
    <AppRouter/>
    </Router>
    </>
  )
}
