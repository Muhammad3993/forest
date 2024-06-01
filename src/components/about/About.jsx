// css
import "./about.css"
// img
import img from "../../assets/images/about.png"
// icons
import { FaPlay } from "react-icons/fa"

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="about_main">
                <p className="title">о нас</p>
                <div className="about_main_box">
                    <div className="about_main_text">
                        <p className="about_title"><span className="header_title_grn">принципы</span> которых мы придерживаемся</p>
                        <div className="about_main_text_box">
                            <p className="about_number">01</p>
                            <div className="about_text">
                                <p className="about_text_title">Качества</p>
                                <p className="about_text_body">Равным образом реализация намеченных плановых заданий широкому кругу (специалистов) участие в формировании вилла в лесу</p>
                            </div>
                        </div>                        
                        <div className="about_main_text_box">
                            <p className="about_number">02</p>
                            <div className="about_text">
                                <p className="about_text_title">Креативность</p>
                                <p className="about_text_body">Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий</p>
                            </div>
                        </div>                        
                        <div className="about_main_text_box">
                            <p className="about_number">03</p>
                            <div className="about_text">
                                <p className="about_text_title">Современность</p>
                                <p className="about_text_body">Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании позиций</p>
                            </div>
                        </div>
                    </div>
                    <div className="about_main_img">
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

export default About