// import react-router-dom
import { Outlet } from "react-router-dom"
// components
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import FooterPlague from "../components/footerPlague/FooterPlague"


const MainLayout = () => {
  return (
    <div>
      <Navbar/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
      <FooterPlague/>
    </div>
  )
}

export default MainLayout