import { useState } from "react"
// Route
import { Link, NavLink } from "react-router-dom"
// import style
import "./navbar.css"
// import images
import logo from "../../assets/images/img.png"
// import icons
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookSquare, FaYoutube } from "react-icons/fa"
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5"


const Navbar = () => {
  const [bar, setBar] = useState();

  const [positionTop, setPositionTop] = useState(false) 
  const changePosition = () => {
      if(window.scrollY >= 30){
        setPositionTop(true)
      }else{
        setPositionTop(false)
      }
  }
  window.addEventListener("scroll", changePosition)

  return (
    <nav className={positionTop ? "nav_bg" : ""}>
        <div className="nav_container container">
            <div className="navbar">
              <Link to={"/"} className="nav_logo">
                <img src={logo} alt="" />
              </Link>
              <div className={bar ? "nav_righ nav_right_close" : "nav_right"}>
                <div className="nav_links">
                  <NavLink to={"/"} className="nav_link">Главная</NavLink>
                  <NavLink to={"/f"} className="nav_link">О нас</NavLink>
                  <NavLink to={"/d"} className="nav_link">Услуги</NavLink>
                  <NavLink to={"/s"} className="nav_link">Проекты</NavLink>
                  <NavLink to={"/a"} className="nav_link">Консультация</NavLink>
                  <NavLink to={"/b"} className="nav_link">Контакты</NavLink>
                </div>
                <div className="nav_socials">
                  <a href="https://www.facebook.com" className="nav_social">
                    <span><FaFacebookSquare /></span>
                  </a>                  
                  <a href="https://www.youtube.com/" className="nav_social youtube">
                    <span><FaYoutube /></span>
                  </a>
                  <a href="https://www.instagram.com/" className="nav_social">
                    <span><AiFillInstagram /></span>
                  </a>
                </div>
              </div>
              <button className="nav_menu" onClick={() => setBar(!bar)}>
              {
                !bar ? 
                <span><IoMenuOutline /></span> :
                <span><IoCloseOutline /></span> 
              }
              </button>
            </div>
        </div>
        <div className={bar ? "overlay" : ""} onClick={() => setBar(!bar)}></div>
    </nav>
  )
}

export default Navbar