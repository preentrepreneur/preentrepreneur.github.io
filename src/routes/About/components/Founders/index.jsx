import React from 'react'

import viraj2 from '../../../../resources/images/viraj2.jpeg'
import srishti from '../../../../resources/images/girl2.jpeg'
import jay1 from '../../../../resources/images/jay1.jpg'
import './Founders.scss'

function Founders(props) {
    return (
        <div className='Founders'>
            <div className='Founders--founder'>
                <div className='Founders--photo'>
                    <img src={viraj2} alt="" width="100%"/>
                </div>
                <div className='Founders--info'>
                    Vipin Viplav
                    <div className='Founders--subinfo'>
                        DTU
                    </div>
                </div>

            </div>
            <div className='Founders--founder'>
                <div className='Founders--photo'>
                <img src={srishti} alt="" width="100%"/>
                </div>
                <div className='Founders--info'>
                    Srishti Garg
                    <div className='Founders--subinfo'>
                        DU
                    </div>
                </div>
            </div>
            <div className='Founders--founder'>
                <div className='Founders--photo'>
                <img src={jay1} alt="" width="100%"/>
                </div>
                <div className='Founders--info'>
                    Jay
                    <div className='Founders--subinfo'>
                        DTU
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founders
