import React from 'react'
import logo from '../../../../resources/images/logo-small.png'

import './Navbar.scss'

function Navbar(props) {
    const {toggleContactForm} = props;
    return (
        <div className='Navbar'>
            <img src={logo} alt="logo" height="50px"/>
            <div className='Navbar__Button' onClick={()=>toggleContactForm(true)}> Contact Us </div>
        </div>
    )
}

export default Navbar
