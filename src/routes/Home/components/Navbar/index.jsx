import React from 'react'
import { withRouter } from 'react-router-dom';
import logo from '../../../../resources/images/logo-small.jpeg'


import './Navbar.scss'

function Navbar(props) {
    const {toggleContactForm} = props;

    const goToHome = () => {
        props.history.push('/')
    }

    return (
        <div className='Navbar'>
            <img src={logo} alt="logo" height="50px" style={{cursor:"pointer"}} onClick={()=>goToHome()}/>
            <div className='Navbar__Button' onClick={()=>toggleContactForm(true)}> Contact Us </div>
        </div>
    )
}

export default withRouter(Navbar)
