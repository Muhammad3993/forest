// import react-router-dom
import { Outlet } from "react-router-dom"
// components
import Navbar from "../components/navbar/Navbar"


const MainLayout = () => {
  return (
    <div>
      <Navbar/>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout