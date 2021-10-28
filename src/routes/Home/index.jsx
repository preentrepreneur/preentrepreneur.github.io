import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

import Navbar from './components/Navbar'
import WhoAreWe from './components/WhoAreWe'
import ContactForm from './components/ContactForm'
import Footer from '../common/Footer'
import right from '../../resources/images/right.png'

import './Home.scss'

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showContactForm: false,
        }
    }

    toggleContactForm = (bool) => {
        this.setState({
            showContactForm: bool
        })
    }

    render() {
        return (
            <>

            <div className='Home'>
                <Navbar toggleContactForm={this.toggleContactForm}/>
                <WhoAreWe/>
                <div className='Home__Title'>
                    Join us on this transformational jourey!
                </div>
                <div className='Home__Pointers'>
                    <div className='Home__Pointers--pointer' id="pointer1">
                        <img src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                        <div>
                            Together we will work on you, transforming you into a strong individual. You'll not just be a resource, but a complete brand.. An enterprise in yourself!   
                        </div>
                        
                    </div>
                    <div className='Home__Pointers--pointer' id="pointer2">
                        <img src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                        <div>
                            We will work on your routine, your skills and your overall outlook which will push you further to find and achieve milestones that make you a complete achiever.
                        </div>      
                    </div>
                    <div className='Home__Pointers--pointer' id="pointer3">
                        <img src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                        <div>
                          We will get you in touch with high energy startups that need highly motivated individials as yourself to create a strong team which will turn their ideas into reality.  
                        </div>
                    </div>       
                    <div className='Home__Pointers--pointer' id="pointer4">
                        <img src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                        <div>
                        We will instill in you principles of effective communication and productivity which will prepare you for the corporate world better than anything else.
                        </div>
                    </div>  
                </div>

                <div className='Home__Lack'>
                    There is a general lack of knowledge among students regarding startups, the way they work and the challenges they face. This is the main reason why students find it confusing and risky to join startups.
                    <div className='Home__Lack--change'>
                        We are here to break this thought process for once and for all.
                    </div>
                </div>

                <div className='Home__Learn'>
                    Know more about those who back us and our team!
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

export default Home
