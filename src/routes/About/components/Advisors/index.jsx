import React from 'react'

import bharat from '../../../../resources/images/bharat.jpeg'
import sparsh from '../../../../resources/images/sparsh.jpeg'
import './Advisors.scss'

function Advisors(props) {

    return (
        <div className='Advisors'>
            <div className='Advisors--Advisor'>
                <img src={bharat} alt="b" height="200px" className="Advisors__Image" />
                <div className='Advisors--Info'>
                    <div className='Advisors--Info--name'>Bharat Bhushan</div>
                    <div className='Advisors--Info--post'>Co-Founder and COO at FlipItNews</div>
                </div>
            </div>
            <div className='Advisors--Advisor' style={{marginTop:"50px"}}>
                <img src={sparsh} alt="b" height="200px" className="Advisors__Image" />
                <div className='Advisors--Info'>
                    <div className='Advisors--Info--name'>Sparsh Koyrala</div>
                    <div className='Advisors--Info--post'>Co-Founder at Factory Plus</div>
                </div>
            </div>
        </div>
    )
}

export default Advisors
