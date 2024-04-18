import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"

//import i18n config 
import "./i18n"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
