import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { Grid,Loader } from 'semantic-ui-react' 
import {getUserDetails} from '../../store/firebaseUtils'

import Content from './components/Content'
import NavColumn from './components/NavColumn'
import StudentProfile from './components/StudentProfile'

function StudentDashboard(props) {
    
    const [collapseProfile,setCollapseProfile] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)

    useEffect(() => {
        const { user } = props;
        // getUserDetails(user?.uid,setIsLoading,setIsError)
    },[])

    return (
        <Grid columns={16} style={{height:"100vh",width:"100%",margin:"0"}}>
            <Grid.Column computer={2} style={{padding:"0"}}>
                <NavColumn/>
            </Grid.Column>
            <Grid.Column computer={!collapseProfile ? 10 : 13} style={{transition:"all 500ms ease-out",padding:"0"}}>
                {isLoading ? <Loader active/> : <Content isError={isError}/>}
            </Grid.Column>
            <Grid.Column computer={!collapseProfile ? 4 : 1}  style={{transition:"all 500ms ease-out",padding:"0"}}>
                <StudentProfile
                    collapseProfile={collapseProfile}
                    setCollapseProfile={setCollapseProfile}
                />
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state?.User?.user
    }
}

export default connect(mapStateToProps)(StudentDashboard)