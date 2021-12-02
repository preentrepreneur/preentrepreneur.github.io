import React from 'react'
import logoHome from '../../../../resources/images/logo-home.jpeg'
import homeBanner from '../../../../resources/images/homeBanner.jpg'

import './WhoAreWe.scss'

function WhoAreWe(props) {
    return (
        <div className='WhoAreWe'>
            <div className='WhoAreWe__Left'>
                
                <img src={logoHome} className="WhoAreWe__LogoMain" alt="logo" style={{borderRadius:"4px"}}/>
            </div>
            <div className='WhoAreWe__Right'>
                <div className='WhoAreWe__Logo'>
                    <img src={homeBanner} className="WhoAreWe__Graphic" alt="home" style={{borderRadius:"4px"}}/>
                </div>
                <div className='WhoAreWe__Text'>
                    {/* <div className='WhoAreWe__Text--heading'>What is Pre <span className='red'>E</span>ntrepreneur ?</div> */}
                    <div className='WhoAreWe__Text--text'>
                            We are community driven platform that enables young, highly motivated individuals to unleash their true potential by finding opportunities which would make the best out of their skillset
                            <br/>
                            We match the skillset of young talented students of the country to the up and coming startups in the vicinity, give them a platform/launch pad to process their ideas, learn from the best in the industry, and contribute their efforts towards the growth of the startup industry. 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default WhoAreWe
