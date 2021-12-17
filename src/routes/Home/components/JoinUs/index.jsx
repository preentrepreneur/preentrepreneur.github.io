import React from 'react'

import right from '../../../../resources/images/right.png'
import './JoinUs.scss'

function JoinUs(props) {
    return (
        <>
            <div className='JoinUs__Title'>
                        Join us on this transformational journey!
            </div>
            <div className='JoinUs__Pointers'>
                <div className='JoinUs__Pointers--pointer' id="pointer1">
                    <img className='JoinUs__PointerImg' src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                    <div>
                        Together we will work on you, transforming you into a strong individual. You'll not just be a resource, but a complete brand.. An enterprise in yourself!   
                    </div>
                    
                </div>
                <div className='JoinUs__Pointers--pointer' id="pointer2">
                    <img className='JoinUs__PointerImg' src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                    <div>
                        We will work on your routine, your skills and your overall outlook which will push you further to find and achieve milestones that make you a complete achiever.
                    </div>      
                </div>
                <div className='JoinUs__Pointers--pointer' id="pointer3">
                    <img className='JoinUs__PointerImg' src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                    <div>
                        We will get you in touch with high energy startups that need highly motivated individuals as yourself to create a strong team which will turn their ideas into reality.  
                    </div>
                </div>       
                <div className='JoinUs__Pointers--pointer' id="pointer4">
                    <img className='JoinUs__PointerImg' src={right} alt="right" height="25px" width="25px" style={{marginRight:"25px"}}/>
                    <div>
                    We will instill in you principles of effective communication and productivity which will prepare you for the corporate world better than anything else.
                    </div>
                </div>  
            </div>
        </>
    )
}

export default JoinUs
