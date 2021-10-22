import React from 'react'
import logoHome from '../../../../resources/images/logo-home.png'

import './WhoAreWe.scss'

function WhoAreWe(props) {
    return (
        <div className='WhoAreWe'>
            <div className='WhoAreWe__Logo'>
                <img src={logoHome} alt="logo" height="200px" style={{borderRadius:"4px"}}/>
            </div>
            <div className='WhoAreWe__Text'>
                <div className='WhoAreWe__Text--heading'>Who are we?</div>
                <div className='WhoAreWe__Text--text'>
                        Pre Entrepreneur is a community driven platform that enables young, highly motivated individuals to unleash thier true potential by finding opportunities which would make the best out of their skillset
                        <br/>
                        We match the skillset of young talented students of the country to the up and coming startups in the vicinity, give them a platform/launch pad to process their ideas, learn from the best in the industry, and contribute their efforts towards the growth of the startup industry. 
                </div>
            </div>
        </div>
    )
}

export default WhoAreWe
