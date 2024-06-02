// swiperjs
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination} from 'swiper/modules';
// css
import "./project.css"
// img
import img from "../../assets/images/swiper_img.png"
import img1 from "../../assets/images/swiper_img1.png"
import img2 from "../../assets/images/swiper_img2.png"
// icons
import { IoIosArrowForward } from "react-icons/io";

const Project = () => {
  return (
    <div className="project">
        <div className="container">
            <div className="project_main">
                <div className="title">Проекты</div>
                <p className="about_title project_main_title"><span className="header_title_grn">проекты компании</span></p>
                <div className="project_main_swiper">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        centeredSlides={true}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                        enabled: true,
                        }}
                        breakpoints={{
                            240: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                              initialSlide: 0
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 0,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                          }}
                        // scrollbar={true}
                        pagination={{
                            type: 'progressbar',
                        }}
                        navigation={true}
                        initialSlide={1}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper swiper-main"
                    >
                        <SwiperSlide>
                            <div className="project_main_swiper_box">
                                <img src={img} alt="" />
                                <div className="project_main_swiper_box_btn">
                                    <p>лесный дом в Новосибирске</p>
                                    <span><IoIosArrowForward /></span>
                                </div>
                            </div>
                        </SwiperSlide>                        
                        <SwiperSlide>
                            <div className="project_main_swiper_box">
                                <img src={img1} alt="" />
                                <div className="project_main_swiper_box_btn">
                                    <p>Коттедж в Краснодаре</p>
                                    <span><IoIosArrowForward /></span>
                                </div>
                            </div>
                        </SwiperSlide>                        
                        <SwiperSlide>
                            <div className="project_main_swiper_box">
                                <img src={img2} alt="" />
                                <div className="project_main_swiper_box_btn">
                                    <p>Коттедж в Новгороде</p>
                                    <span><IoIosArrowForward /></span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="project_main_swiper_box">
                                <img src={img} alt="" />
                                <div className="project_main_swiper_box_btn">
                                    <p>лесный дом в Новосибирске</p>
                                    <span><IoIosArrowForward /></span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project