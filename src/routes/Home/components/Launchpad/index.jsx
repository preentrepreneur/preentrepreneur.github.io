import React from 'react'
import homeBanner2 from '../../../../resources/images/homeBanner2.jpg'
import './Launchpad.scss'

function Launchpad(props) {
    return (
        <div className='Launchpad'>
            <div className='Launchpad__Left'>
                <img className='Launchpad__Left--img' src={homeBanner2} alt="homB" width="450px"/>
            </div>
            <div className='Launchpad__Right'>
                <div className='Launchpad__Right--heading'>Pre Entrepreneur as a Launchpad</div>
                <div className='Launchpad__Right--text'>The bridge between an amazing idea and turning that idea into reality is nothing but a carefully planned model, some passion and a whole lot of dedication. <br/>
                We are here to help you take YOUR Startup idea into the real world by creating a strategic plan and a robust business model. We will get you in touch with some of the most motivated and amazing minds in the startup community which will help your journey as an Entrepreneur and will enable you to create a strong team.</div>
            </div>
        </div>
    )
}

export default Launchpad
