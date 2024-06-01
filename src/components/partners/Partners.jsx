// import style
import "./partners.css"
// img
import img from "../../assets/images/partners/logo.png"
import img1 from "../../assets/images/partners/logo1.png"
import img2 from "../../assets/images/partners/logo2.png"
import img3 from "../../assets/images/partners/logo3.png"
import img4 from "../../assets/images/partners/logo4.png"
import img5 from "../../assets/images/partners/logo5.png"
import img6 from "../../assets/images/partners/logo6.png"
import img7 from "../../assets/images/partners/logo7.png"

const Partners = () => {
  return (
    <div className='partners'>
        <div className="container">
            <div className="partners_main">
                <div className="title">ПАРТНЕРЫ</div>
                <p className="about_title project_main_title"><span className="header_title_grn">наши партнеры</span></p>
                <div className="partners_main_boxes">
                    <div className="partners_main_box">
                        <a href="">
                            <img src={img} alt="" />
                        </a>         
                        <a href="">
                            <img src={img1} alt="" />
                        </a>
                    </div>
                    <div className="partners_main_box">
                        <a href="">
                            <img src={img2} alt="" />
                        </a>         
                        <a href="">
                            <img src={img3} alt="" />
                        </a>
                    </div>
                    <div className="partners_main_box">
                        <a href="">
                            <img src={img4} alt="" />
                        </a>         
                        <a href="">
                            <img src={img5} alt="" />
                        </a>
                    </div>            
                    <div className="partners_main_box">
                        <a href="">
                            <img src={img6} alt="" />
                        </a>         
                        <a href="">
                            <img src={img7} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners