// css
import "./counts.css"

const Counts = () => {
  return (
    <div className="counts">
        <div className="container">
            <div className="counts_main">
                <div className="counts_main_box">
                    <p className="counts_main_box_number">9</p>
                    <p className="counts_main_box_text">лет опыта <br className="br"/> работ</p>
                </div>
                <div className="counts_main_box">
                    <p className="counts_main_box_number">13</p>
                    <p className="counts_main_box_text">крутых  дизайнеров и <br className="br"/> архитекторов</p>
                </div>
                <div className="counts_main_box">
                    <p className="counts_main_box_number">103</p>
                    <p className="counts_main_box_text">проектов во всех <br className="br"/> регионах страны</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counts