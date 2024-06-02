// component
import { useState } from "react"
import ContactComponent from "../components/contact/ContactComponent"
import FormModal from "../components/formModal/FormModal"
import Receive from "../components/receive/Receive"

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <FormModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        <ContactComponent setIsOpen={setIsOpen}/>
        <Receive/>
    </>
  )
}

export default Contact