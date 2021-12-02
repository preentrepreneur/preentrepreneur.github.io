import React,{useState} from 'react'

import Navbar from '../Home/components/Navbar'
import Footer from '../common/Footer'
import ContactForm from '../Home/components/ContactForm'
import Advisors from './components/Advisors'
import Founders from './components/Founders'
import './About.scss'

function About(props) {

    const [showContactForm,setShowContactForm] = useState(false)

    const toggleForm = (bool) => {
        setShowContactForm(bool)
    }

    return (
        <>
            <Navbar toggleContactForm={toggleForm}/>
            <div className='About'>

                <div className='About__Heading'>
                    Our Advisors
                </div>
                <Advisors/>

                <div className='About__Heading'>
                        Our Team
                </div>
                <Founders/>
            </div>
            <Footer toggleContactForm={toggleForm}/>

            { showContactForm ? (
                <ContactForm showForm={showContactForm} toggleForm={toggleForm}/>
            ): null}
        </>
    )
}

export default About
