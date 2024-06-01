// css
import "./receive.css"

const Receive = () => {
  return (
    <div className='receive'>
        <div className="container">
            <div className="receive_main">
                <p className="receive_main_subtitle">получите расчет сметы с учетом стоимости работ и материалов через 30 минут</p>
                <p className="receive_main_title">Оставьте заявку прямо сейчас</p>
                <form className="receive_form">
                    <div className="receive_main_input">
                        <input type="text" placeholder="Имя" />
                    </div>                    
                    <div className="receive_main_input">
                        <input type="text" placeholder="Tелефон" />
                        <button className="receive_main_btn">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Receive;