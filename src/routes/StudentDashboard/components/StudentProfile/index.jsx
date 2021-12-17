import React, { useEffect,useState } from 'react'
import './StudentProfile.scss'
import {CircleProgress} from 'react-gradient-progress'

function StudentProfile(props) {

    const [progress,setProgress] = useState(0)

    useEffect(()=>{
        if(progress<50) {
            setTimeout(() => {
                setProgress(progress+1)
            }, 10);
        }
       
    },[progress])

    return (
        <div className='StudentProfile'>
            <CircleProgress width={150} fontColor='white' percentage={progress} strokeWidth={10} 
            // primaryColor={['#2e98ac', '#4e2493']}
            primaryColor={['#4E9F3D','#4E9F3D']}
            />
        </div>
    )
}

export default StudentProfile
