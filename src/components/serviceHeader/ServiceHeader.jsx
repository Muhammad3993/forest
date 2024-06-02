// style
import "./serviceHeader.css";
// img
import img from "../../assets/images/about.png";
// icons
import { FaPlay } from "react-icons/fa";

const ServiceHeader = () => {
  return (
    <div className='serviceHeader'>
        <div className="container">
            <div className="serviceHeader_main">
                <div className="serviceHeader_main_box">
                    <div className="serviceHeader_main_box_txt">
                        <div className="projectHeader_text_routes">
                            <p className="projectHeader_text_route">Главная -</p>
                            <p className="projectHeader_text_route">Услуги</p>
                        </div>
                        <p className="about_title">Строительство <span className="header_title_grn">домов и коттеджей</span></p>
                        <p className="serviceHeader_main_box_txt_body">на выбор подходяший раззмер и конфигурация дома для разных земельных участок и разного состава семьи ( молодая пара. семья с маленьким ребенком, дом для большой семьи).Мы сможем установить дом где угодно - на участке перед вышем домом, в лесной зоне, на береге реки. Доставку осуществляет наша компания</p>
                        <p className="serviceHeader_main_box_txt_body">
                        Преимущества
                        Комплексный подряд. Вы можете заказать выполнение всех работ в нашей компании: от проектирования до электромонтажа в готовом здании. «АНКА техник» располагает парком спецтехники, штатом специалистов. Возможно сотрудничество на условиях субподряда.
                        </p>
                        <p className="serviceHeader_main_box_txt_body">Качество. Мы учитываем характеристики участка, соблюдаем ШНК, другие нормы, используем надежные строительные технологии.</p>
                        <p className="serviceHeader_main_box_txt_body">Сотрудничество. Компания «АНКА техник» подберет технологии строительства, стройматериалы, обеспечит их поставку. Запланированные работы выполняются без нарушения графика. Грамотная организация строительства позволяет возводить коттеджи и таунхаусы всего за несколько месяцев.</p>
                        <button className="serviceHeader_main_box_txt_btn">Подробнее</button>
                    </div>
                    <div className="serviceHeader_main_box_img">
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

export default ServiceHeader