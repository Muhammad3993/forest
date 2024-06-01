import { useEffect, useState } from "react";
// css
import "./footerPlague.css";
// routing
import { Link, NavLink } from "react-router-dom";
// import img
import logo from "../../assets/images/img.png";
// icons
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTelegram, FaYoutube } from "react-icons/fa";
import { PiArrowUpLight } from "react-icons/pi";

const FooterPlague = () => {
    const [backDrop, setBackDrop] = useState(false);

    const changeSpot = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setBackDrop(false);
    };

    useEffect(() => {
        if (backDrop) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [backDrop]);
  return (
    <div className='footerPlague'>
        <div className="container">
            <div className="footerPlague_main">
                <Link to={"/"} className="logo">
                    <img src={logo} alt="" />
                </Link>
                <p className="copyRight">© Все право защищены 2021</p>
                <div className="footer_links">
                    <NavLink to={"/"} className="footer_link">Главная</NavLink>                    
                    <NavLink to={"/g"} className="footer_link">О нас</NavLink>                    
                    <NavLink to={"/q"} className="footer_link">Проекты</NavLink>                    
                    <NavLink to={"/w"} className="footer_link">Услуги</NavLink>                    
                    <NavLink to={"/e"} className="footer_link">Новости</NavLink>                    
                    <NavLink to={"/r"} className="footer_link">Контакты</NavLink>
                </div>
                <div className="backDrop" onClick={changeSpot}>
                    <span><PiArrowUpLight /></span>
                </div>
                <div className="nav_socials">
                    <a href="https://www.facebook.com" className="nav_social">
                        <span><FaTelegram /></span>
                    </a>                     
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
        </div>
    </div>
  )
}

export default FooterPlague