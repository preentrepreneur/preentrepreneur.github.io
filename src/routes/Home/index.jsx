import React, { Component } from 'react'
// import { Modal } from 'semantic-ui-react'
// import { Button } from 'primereact/button'
// import { Tooltip } from 'primereact/tooltip'
import { withRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import WhoAreWe from './components/WhoAreWe'
import JoinUs from './components/JoinUs'
import ContactForm from './components/ContactForm'
import Footer from '../common/Footer'
import Launchpad from './components/Launchpad'
import right from '../../resources/images/right.png'


import './Home.scss'

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showContactForm: false,
        }
    }

    redirectToAbout = () => {
        let home = document.querySelector('#Home')
        home.classList.add("fadeOut")

        setTimeout(() => {
            this.props.history.push('/about')
        }, 800);
    }

    toggleContactForm = (bool) => {
        this.setState({
            showContactForm: bool
        })
    }

    render() {
        return (
            <>
            <Navbar toggleContactForm={this.toggleContactForm}/>
            <div className='Home' id="Home">

                {/* <div className='Home__Begin'>
                    Begin Your Journey

                    <div className='Home__Begin__Buttons'>
                        <Button
                            className='p-button-raised p-button-rounded'
                            label='For Students'
                            icon="pi pi-user"
                            style={{marginRight:"20px"}}
                        />
                        <Button
                            className='p-button-raised p-button-rounded p-button-info'
                            label="For Companies"
                            icon="pi pi-building"
                            disabled
                            tooltip='Coming Soon'
                            tooltipOptions={{position:"top"}}
                        />  
                    </div>
                    
                </div> */}
                <WhoAreWe/>

                <JoinUs/>

                <Launchpad/>

                {/* <div className='Home__Lack'>
                    There is a general lack of knowledge among students regarding startups, the way they work and the challenges they face. This is the main reason why students find it confusing and risky to join startups.
                    <div className='Home__Lack--change'>
                        We are here to break this thought process for once and for all.
                    </div>
                </div> */}

                <div className='Home__Learn' onClick={()=>this.redirectToAbout()}>
                    Know more about us!
                </div>

                
                <Footer toggleContactForm={this.toggleContactForm}/>
            </div>

            {this.state.showContactForm ? (
                <ContactForm toggleForm={this.toggleContactForm} showForm={this.state.showContactForm}/>
            ) : null}
            </>
        )
    }
}

export default withRouter(Home)
