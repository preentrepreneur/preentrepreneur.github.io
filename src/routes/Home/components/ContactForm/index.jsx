import React,{useState,useEffect} from 'react'
import { Modal,Input,TextArea } from 'semantic-ui-react'
import './ContactForm.scss'

function ContactForm(props) {
    const { toggleForm,showForm } = props;

    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [email,setEmail] = useState('')
    const [college,setCollege] = useState('')
    const [whyJoin,setWhyJoin] = useState('')
    const [aboutYourself,setAboutYourself] = useState('')

    useEffect(() => {
        return () => {
            setName('')
            setNumber('')
            setEmail('')
            setCollege('')
            setWhyJoin('')
            setAboutYourself('')
        }
    }, [])

    const textAreaStyle = {
        width:"100%",border:"1px solid #e5e5e5",borderRadius:"4px",padding:"5px",margin:"5px 0 20px 0"
    }

    return (
        <Modal open={showForm} onClose={()=>toggleForm(false)} size="large" dimmer="blurring">
            <Modal.Header>
                Get in touch with us!
            </Modal.Header>
            <Modal.Content>
                <div className='Contact__Row1'>
                    <Input 
                        label="Your Name"
                    />
                    <Input label="Your Contact"/>
                    <Input label="Your Email"/>
                    
                </div>
                <Input fluid label="Your College" style={{margin:"20px 0"}}/>

                <div className='Contact__TextRow'>
                    <div className='Contact__TextRow--label'>
                        Why do you want to join pre Entrepreneur?
                    </div>
                    <TextArea placeholder="Tell us why do you want to join us" style={textAreaStyle}/>
                </div>

                <div className='Contact__TextRow'>
                    <div className='Contact__TextRow--label'>
                        Tell us a little about yourself
                    </div>
                    <TextArea placeholder="Your skills, your likes and dislikes and things you're passionate about in life" style={textAreaStyle}/>
                </div>
                
                <div className='Contact__Submit'>
                    Submit
                </div>

            </Modal.Content>
        </Modal>
    )
}

export default ContactForm
