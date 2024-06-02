// style
import "./contact.css"
// map
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 40.5341,
  lng: 70.9309
};
// icons
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

const ContactComponent = ({setIsOpen}) => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="contact_main">
                <div className="contact_main_txt">
                    <div className="projectHeader_text_routes">
                        <p className="projectHeader_text_route">Главная -</p>
                        <p className="projectHeader_text_route">Контакты</p>
                    </div>
                    <p className="about_title"><span className="header_title_grn">КОНТАКТЫ</span></p>
                    <p className="contact_main_title">Наш офис:</p>
                    <p className="contact_main_body">г.Москва ул. Ломоносова д. 16 9:00-21:00 Без выходных</p>                    
                    <a href="tel:+998976611688" className="contact_main_body">+998 97 661 16 88</a>
                    <p className="contact_main_title">Прием звонков: с 9:00 до 18:00 (Пн-Сб)</p>                   
                    <p className="contact_main_title">Электронная почта:</p>
                    <a href="mailto:muhammadjon3993@gmail.com" className="contact_main_body">muhammadjon3993@gmail.com</a>
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
                    <div className="contact_main_btn" onClick={() => setIsOpen(true)}>Связаться с нами</div>
                </div>
                <div className="contact_main_map">
                    <LoadScript googleMapsApiKey="AIzaSyCJqVuZuAssq4bi7Te2mo43Aof_ICf_ujc">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactComponent;