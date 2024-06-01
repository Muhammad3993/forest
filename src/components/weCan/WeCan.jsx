// css
import "./weCan.css";
// img
import img from "../../assets/images/img2.png";
// icons
import { FaPlay } from "react-icons/fa";

const WeCan = () => {
  return (
    <div className='weCan'>
        <div className="container">
            <div className="weCan_main">
                <p className="title">Что мы можем?</p>
                <div className="weCan_main_box">
                    <div className="about_main_text">
                        <p className="about_title"><span className="header_title_grn">индивидуальное</span> проектирование вашех домов</p>
                        <p className="about_body">На выбор подходяший раззмер и конфигурация дома для разных земельных участок и разного состава семьи ( молодая пара. семья с маленьким ребенком, дом для большой семьи).Мы сможем установить дом где угодно - на участке перед вышем домом, в лесной зоне, на береге реки. Доставку осуществляет наша компания</p>
                        <button className="weCan_btn">Подробнее об услугах</button>
                    </div>
                    <div className="weCan_main_img">
                        <img src={img} alt="" />
                        <div className="video_play">
                            <span className="l-play"><FaPlay /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeCan