// css
import "./formModal.css"

const FormModal = ({isOpen, setIsOpen}) => {
  return (
    <div className={!isOpen ? 'formModal formModal_close' : "formModal"}>
        <div className="formModal_main">
            <p className="about_title"><span className="header_title_grn">Связаться с нами</span></p>
            <p className="formModal_main_title">Персональный менеджер свяжется с вами в течение 15 минут</p>
            <form className="fromModal_form">
                <input type="text" placeholder='Имя Фамилия' className='input' />
                <input type="email" placeholder='E-mail' className='input' />
                <input type="text" placeholder='Телефон' className='input' />
                <label className="fromModal_check">
                    <input type="checkbox" />
                    <p className='fromModal_check_txt'>Согласен(на) с обработкой персональных данных</p>
                </label>
                <button className="formModal_main_btn">Заказать звонок</button>
            </form>
        </div>
        <div className="formModal_overlay" onClick={() => setIsOpen(false)}></div>
    </div>
  )
}

export default FormModal;