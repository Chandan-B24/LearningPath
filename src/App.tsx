import React from "react"
import Navbar from "./components/Navbar/Navbar"
import AllRoutes from "./AllRoutes/AllRoutes"
import Footer from "./components/Footer/Footer"
import { footerLinks } from "./constatns/footer"


const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer links = {footerLinks}/>
    </div>
  )
}

export default App