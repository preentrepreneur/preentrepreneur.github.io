import React, { Component } from 'react'
// import { Modal } from 'semantic-ui-react'

import Navbar from './components/Navbar'
import WhoAreWe from './components/WhoAreWe'
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

    render() {
        return (
            <div className='Home'>
                <Navbar/>
                <WhoAreWe/>
                <div className='Home__Title'>
                    Join us on this incredible jourey!
                </div>
                <div className='Home__Pointers'>
                    <div className='Home__Pointers--pointer'>
                        <img src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                        <div>
                            Together we will work on you, transforming you into a strong individual. You'll not just be a resource, but a complete brand.. An enterprise in yourself!   
                        </div>
                        
                    </div>
                    <div className='Home__Pointers--pointer'>
                        <img src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                        <div>
                            We will work on your routine, your skills and your overall outlook which will push you further to find and achieve milestones that make you a complete achiever
                        </div>      
                    </div>
                    <div className='Home__Pointers--pointer'>
                        <img src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                        <div>
                          We will get you in touch with high energy startups that need highly motivated individials as yourself to create a strong team which will turn their ideas into reality  
                        </div>
                        
                    </div>       
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home
