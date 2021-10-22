import React from 'react'

import whatsapp from '../../../resources/images/whatsapp.png'
import mail from '../../../resources/images/mail.png'
import './Footer.scss'

function Footer(props) {
    return (
        <div className='Footer'>
            Get in touch with us
            <div className='Footer__Icons'>
                <img src={whatsapp} alt="wa" height="40px" width="40px"/>
                <img src={mail} alt="wa" height="40px" width="40px"/>
            </div>
        </div>
    )
}

export default Footer
