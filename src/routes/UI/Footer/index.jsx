import React from 'react'

import whatsapp from '../../../resources/images/whatsapp.png'
import mail from '../../../resources/images/mail.png'
import './Footer.scss'

function Footer(props) {

    const { toggleContactForm } = props;

    const sendWhatsapp = () => {
        window.open(`https://wa.me/919560804501/?text=${encodeURI('Hi! I want to know more about preEntrepreneur!')}`)
    }
    return (
        <div className='Footer'>
            Get in touch with us
            <div className='Footer__Icons'>
                <img src={whatsapp} alt="wa" height="40px" width="40px" onClick={()=>sendWhatsapp()}/>
                <img src={mail} alt="wa" height="40px" width="40px" onClick={()=>toggleContactForm(true)}/>
            </div>
        </div>
    )
}

export default Footer
