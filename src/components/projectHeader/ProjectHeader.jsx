// style
import "./projectHeader.css"
// img
import img from "../../assets/images/header.png"

const ProjectHeader = () => {
  return (
    <div className='projectHeader'>
        <div className="container">
          <div className="projectHeader_main">
            <div className="projectHeader_text">
              <div className="projectHeader_text_routes">
                <p className="projectHeader_text_route">Главная -</p>
                <p className="projectHeader_text_route">Проекты -</p>
                <p className="projectHeader_text_route l-route">Котеж в краснода</p>
              </div>
              <p className="projectHeader_title">Котеж в краснодаре</p>
              <p className="projectHeader_subtitle">Равным образом реализация намеченных плановых заданий широкому кругу (специалистов) участи кругу (специалистов) участи</p>
              <div className="projectHeader_btn">Связаться с нами</div>
              <div className="header_bottom_left">
                <p>01/</p>
                <p className="header_bottom_left_grn">04</p>
              </div>
            </div>
            <div className="projectHeader_main_img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectHeader