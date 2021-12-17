import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

import ContentHome from './ContentHome'

function Content(props) {

    useEffect(()=>{
        if(!props.isError) {
            props.history.push('/dashboard/home')
        }
    },[])

    return (
        <div className='Content'>
            <Route exact path='/dashboard/home'>
                <ContentHome/>
            </Route>
        </div>
    )
}

export default withRouter(Content)
