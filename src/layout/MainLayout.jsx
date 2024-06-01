// import react-router-dom
import { Outlet } from "react-router-dom"
// components
import Navbar from "../components/navbar/Navbar"
import FooterPlague from "../components/footerPlague/FooterPlague"


const MainLayout = () => {
  return (
    <div>
      <Navbar/>
        <main>
          <Outlet/>
        </main>
      <FooterPlague/>
    </div>
  )
}

export default MainLayout