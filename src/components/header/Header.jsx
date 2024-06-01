// css
import "./header.css"
// icons
import { FaPlay } from "react-icons/fa"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"
// img
import img from "../../assets/images/img1.png"


const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header_main">
          <div className="header_text">
            <p className="header_title">посреди <span className="header_title_grn">леса</span> <br /> далеко от шума</p>
            <p className="header_description">Равным образом реализация намеченных плановых заданий широкому кругу (специалистов) участие в формировании</p>
            <button className="header_btn">Связаться с нами</button>
          </div>
          <div>
            <button className="header_play">
              <span className="l-play"><FaPlay /></span>
            </button>
          </div>
          <div className="header_bottom">
            <div className="header_bottom_left">
              <p>01/</p>
              <p className="header_bottom_left_grn">04</p>
            </div>
            <div className="header_bottom_right">
              <span><LiaLongArrowAltRightSolid /></span>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header