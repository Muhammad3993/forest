// style
import "./projectDescription.css"
// img
import img from "../../assets/images/icon.png"

const ProjectDescription = () => {

  return (
    <div className="projectDesc">
        <div className="container">
            <div className="projectDesc_main">
                <p className="about_title project_main_title"><span className="header_title_grn">наши партнеры</span></p>
                <div className="projectDesc_main_data">
                    <p className="projectDesc_main_data_subtitle"><span>С другой стороны новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.</span> <br /> <br /> Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности.Повседневная практика показывает, что начало повседневной работы по формированию позиции требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации требуют определения и уточнения соответствующий условий активизации. Разнообразный и богатый опыт сложившаяся структура организации позволяет оценить значение новых предложений.. Таким образом сложившаяся структура организации требуют определения и уточнения соответствующий условий активизации.</p>
                    <div className="projectDesc_main_data_right">
                        <div className="projectDesc_main_data_right_box">
                            <p className="projectDesc_main_data_right_box_title">АДРЕС</p>
                            <p className="projectDesc_main_data_right_box_body">г.Краснодар, Чиланзарский район, 24-7-7</p>
                        </div>
                        <div className="projectDesc_main_data_right_box">
                            <p className="projectDesc_main_data_right_box_title">ПЛОЩАДЬ</p>
                            <p className="projectDesc_main_data_right_box_body">49 215 М2</p>
                        </div>
                        <div className="projectDesc_main_data_right_box">
                            <p className="projectDesc_main_data_right_box_title">МАТЕРИАЛЫ</p>
                            <p className="projectDesc_main_data_right_box_body">Битон, цимент, гипс</p>
                        </div>
                        <div className="projectDesc_main_data_right_box">
                            <p className="projectDesc_main_data_right_box_title">СРОК</p>
                            <p className="projectDesc_main_data_right_box_body">Построенно за 12 месяцев</p>
                        </div>
                        <div className="projectDesc_main_data_right_box">
                            <p className="projectDesc_main_data_right_box_title">ЭТАЖНОСТЬ</p>
                            <p className="projectDesc_main_data_right_box_body">24 этажей</p>
                        </div>
                        <div className="projectDesc_main_data_right_box">
                            <button className="projectDesc_main_data_right_box_btn">Рассчитать подобный проек</button>
                            <div className="projectDesc_main_data_right_box__body">
                                <div className="projectDesc_main_data_right_box__body_img">
                                    <img src={img} alt="" />
                                </div>
                                <p>Наши эксперты рассчитают для вас стоимость строительства объект 45 минут</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDescription;