import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button,Popup,Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { userTypes } from '../../store/constants'
import { signInWithGoogle } from '../../firebase';
import { auth } from '../../firebase';
import * as LoginActions from '../../store/action'

import Navbar from './components/Navbar'
import WhoAreWe from './components/WhoAreWe'
import JoinUs from './components/JoinUs'
import ContactForm from './components/ContactForm'
import Footer from '../UI/Footer'
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

                <div className='Home__Begin'>
                    Begin Your Journey

                    <div className='Home__Begin__Buttons'>
                        <Button
                            primary
                            color="teal"
                            style={{
                                marginRight:"20px",
                                borderRadius:"50px",
                            }}
                            onClick={()=> {
                                this.props.setUserType({
                                    userType : userTypes.STUDENT,
                                })
                                this.props.history.push('/login')
                            }}
                        >
                            <Icon name="user outline"/>
                            For Students
                        </Button>
                        <Popup
                            content="Coming Soon!"
                            inverted
                            position="right center"
                            trigger={
                                <Button
                                    color="purple"
                                    style={{borderRadius:"50px"}}
                                > 
                                <Icon name="building outline"/>
                                For Companies 
                                </Button>
                            }
                        />
                    </div>
                    
                </div>
                <WhoAreWe/>

                <JoinUs/>

                <Launchpad/>

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

const mapStateToProps = (state) => {
    return {
        state : state
    }
}

const mapDispatchWithProps = (dispatch) => {
    return {
        setUserType : payload => dispatch(LoginActions.setUserType(payload))
    }
}

export default connect(mapStateToProps,mapDispatchWithProps)(withRouter(Home))
