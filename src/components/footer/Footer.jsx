// icons
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
// style
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer">
                <div className="footer_left">
                    <p className="about_title project_main_title"><span className="header_title_grn">Консультация</span></p>
                    <div className="footer_text">
                        <p className="footer__text">Персональный менеджер свяжется с вами в течение 15 минут</p>
                        <form className='form'>
                            <input type="text" placeholder='Имя Фамилия' className='input' />
                            <input type="email" placeholder='E-mail' className='input' />
                            <input type="text" placeholder='Телефон' className='input' />
                            <label className="footer_check">
                                <input type="checkbox" />
                                <p className='footer_check_txt'>Согласен(на) с обработкой персональных данных</p>
                            </label>
                            <button className='footer_btn'>ОСТАВИТЬ ЗАЯВКУ</button>
                        </form>
                    </div>
                </div>
                <div className="footer_right">
                    <p className="about_title project_main_title"><span className="header_title_grn">КОНТАКТЫ</span></p>
                    <div className="footer_text">
                        <p className='footer_title'>Наш офис:</p>
                        <p className='footer_body'>г.Москва ул. Ломоносова д. 16 9:00-21:00 Без выходных</p>                      
                        <a href='tel:+998976611688' className='footer_body'>+998 97 661 16 88</a>
                        <p className='footer_title email'>Электронная почта:</p>
                        <a href='mailto:muhammadjon3993@gmail.com' className='footer_body'>muhammadjon3993@gmail.com</a> 
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
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;