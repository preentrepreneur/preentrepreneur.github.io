import React from 'react'
import { Icon } from 'semantic-ui-react'
import './NavCol.scss'

function NavColumn(props) {

    const navOptions = [
        { label:"Home",icon:"home" },
        { label: "Tests",icon:"pencil alternate"}
    ]
    return (
        <div className='NavColumn'>
            {navOptions.map((navOption,index) => (
                <div className='NavColumn__Item' key={index}>
                    <Icon className='NavColumn__Item--icon' name={navOption.icon} size='big'/>
                </div>
            ))}
        </div>
    )
}
 
export default NavColumn
