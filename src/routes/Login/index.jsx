import React, { useState,useEffect } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {Input, Grid,Button, Divider,Icon,Loader} from 'semantic-ui-react'
import toast from 'react-hot-toast'
import { signInWithGoogle,auth } from '../../firebase'
import {setupUser} from '../../store/firebaseUtils'
import * as actions from '../../store/action'

import Navbar from '../Home/components/Navbar'
import rocket from '../../resources/svgs/rocket.svg'
import './Login.scss'

export const Login = (props) => {

    const loginFormStates = {
        SIGN_UP : "SIGN_UP",
        SIGN_IN : "SIGN_IN"
    }

    const [formState,setFormState] = useState(loginFormStates.SIGN_UP)
    const [isLoading,setIsLoading] = useState(false)
    const [isSigningUp,setIsSigningUp] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [enableSubmit,setEnableSubmit] = useState(false)

    useEffect(() => {
        if(email?.length && password?.length && confirmPassword?.length )
            setEnableSubmit(true)
    }, [email,password,confirmPassword])

    const toggleFormState = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false),500)
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        if(formState === loginFormStates.SIGN_UP)
            setFormState(loginFormStates.SIGN_IN)
        else setFormState(loginFormStates.SIGN_UP)
    }

    const signUp = async() => {
        setIsSigningUp(true)
        if(password === confirmPassword) {
            const response = auth.createUserWithEmailAndPassword(email,password)
            toast.promise(response,{
                loading:"Signing Up...",
                success: "🤗 Successfully signed up!",
                error:"😕 Please Try Again",
            },{
                style: {
                    borderRadius: '6px',
                    background: '#333',
                    color: '#fff',
                },
            })
            const data = await response;
            if(data.user) {
                setIsSigningUp(false)
                setTimeout(() => {
                    toast.success("Welcome To PreEntrepreneur! Redirecting to your dashboard",{
                    style: {
                        border: '1px solid rgba(78, 36, 147, 1)',
                        padding: '16px',
                        color: 'rgba(78, 36, 147, 1)',
                    },
                })
                }, 500);
                setTimeout(() => {
                    props.history.push('/dashboard')
                }, 1500);
                setupUser(data.user)
            }
        } else alert("Passwords Don't match")
    }

    return (
        <div className='Login'>
            <Navbar/>
            <Grid style={{height:"100vh",animation:"fadeIn 2s"}}>
                <Grid.Row columns={2} style={{padding:"0",margin:"0"}}>
                    <Grid.Column 
                    style={{padding:"40px 50px"}}>
                        <div className='Login__Heading'>
                            Join us as we redefine hiring.
                        </div>
                        <div className='Login__Subheading'>
                            Please sign in to proceed.
                        </div>
                        <img src={rocket} alt="rocket" height={"100%"} style={{transform: "scale(1.5) rotate(-10deg)"}}/>
                    </Grid.Column>
                    <Grid.Column className='flex-centered' 
                        style={{background : "linear-gradient(90deg,rgba(255, 255, 255, 0.95) 0%,rgba(46, 152, 172, 1) 40%,rgba(63,85, 180, 1) 75%,rgba(78, 36, 147, 1) 100%)",
                                borderRadius:"50px 0 0 0px",
                                borderLeft:"1px solid #818181"
                        }}>
                        <div className='Login__Form'>

                            <div>
                            <div className='Login__Form--heading'>
                                {formState === loginFormStates.SIGN_UP ?
                                "Sign Up" : "Sign In"}
                            </div>

                            { isLoading ? (
                                <div style={{position:"relative",marginTop:"150px"}}>
                                    <Loader active/>
                                </div>
                                    
                            ) : (
                                <>
                                <div className='Login__Form--label'>
                                Email
                                </div>
                                <Input 
                                    icon="at"
                                    fluid
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e,data) => setEmail(data.value)}
                                />

                                <div className='Login__Form--label'>
                                    Password
                                </div>
                                <Input 
                                    type='password'
                                    fluid
                                    placeholder="Enter password"
                                    onChange={(e,data) => setPassword(data.value)}
                                />

                                { formState === loginFormStates.SIGN_UP ? (
                                    <>
                                    <div className='Login__Form--label'>
                                        Confirm your password
                                    </div>
                                    <Input 
                                        type='password'
                                        fluid
                                        placeholder="Confirm your password"
                                        onChange={(e,data) => setConfirmPassword(data.value)}
                                    />
                                    </>
                                ): null}
                                </>
                            )}
                            
                            </div>
                            

                            <div>

                                <Button 
                                    className='gradient-button'
                                    fluid
                                    style={{
                                        margin:"30px 0 10px 0",
                                        padding:"12px 50px",
                                    }}
                                    onClick={signUp}
                                    loading={isLoading || isSigningUp}
                                >
                                    {formState === loginFormStates.SIGN_UP ?
                                       "Sign Up" : "Sign In"} 
                                </Button>
                                <div className='Login__Form--already'>
                                    {formState === loginFormStates.SIGN_UP ? 
                                    "Already have an account? " : "Create A New Account. "}
                                    <span className='Login__Form--signIn' onClick={toggleFormState}>
                                       {formState === loginFormStates.SIGN_UP ?
                                       "Sign In" : "Sign Up"} 
                                    </span>
                                </div>
                                <Divider></Divider>
                                <div className='Login__Form__GoogleText'>
                                    Sign in using google
                                </div>
                                <Button
                                    color='green'
                                    fluid
                                    style={{margin:"8px 0",padding:"13px 0"}}
                                    onClick={signInWithGoogle}
                                >
                                    <Icon name="google"/>
                                    Google
                                </Button>
                            </div>
                            
                        </div>
                    </Grid.Column>               
                </Grid.Row>
            </Grid>
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchWithProps = (dispatch) => {
    return {
        setUser: payload => dispatch(actions.setUser(payload))
    }
}

export default connect(mapStateToProps,mapDispatchWithProps)(withRouter(Login))
