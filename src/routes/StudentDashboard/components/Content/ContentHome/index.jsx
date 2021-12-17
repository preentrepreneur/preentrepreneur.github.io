import React from 'react'
import { connect } from 'react-redux'
import './ContentHome.scss'
import banner from '../../../../../resources/images/studentbanner.jpg'


function ContentHome(props) {

    console.log("CONTENTHOMEPROPS",props);
    return (
        <div className='ContentHome'>
            <div className='ContentHome__Banner'>
                <div className='ContentHome__Banner--name'>
                    Rahul Subramaniam
                </div>
                <div className='ContentHome__Banner--mail'>
                    rahul.tech@gmail.com
                </div>
            </div>

            <div className='ContentHome__Body'>
                <div className='ContentHome__Body--Title'>
                    Welcome to your dashboard, Rahul.
                </div>
                <div className='ContentHome__Body--Subtitle'>
                    Here you will get an overview of all things important.
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state?.User?.user
    }
}

export default connect(mapStateToProps)(ContentHome)
