import React,{useState,useEffect,useRef} from 'react'
import { Modal,Input,TextArea,Form,Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import emailjs from 'emailjs-com'
import './ContactForm.scss'

function ContactForm(props) {
    const { toggleForm,showForm } = props;
    const form = useRef()

    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [email,setEmail] = useState('')
    const [college,setCollege] = useState('')
    const [whyJoin,setWhyJoin] = useState('')
    const [aboutYourself,setAboutYourself] = useState('')
    const [formSubmitted,setFormSubmitted] = useState(false)

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

    const sendEmail = (e) => {
        emailjs.sendForm('service_14k1ovf','template_8wcg9pv',e.target,'user_sAURrrCieygo46LmImVDa')
        .then((result) => {
            if(result.status == 200) {
                toggleForm(false)
                setFormSubmitted(true)
                toast.success("Form Submitted Successfully!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                })
            }  
        }, (error) => {
            toast.error("Please try again!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
            console.log(error);
        });
    }

    return (
        <Modal open={showForm} onClose={()=>toggleForm(false)} size="large" dimmer="blurring">
            <Modal.Header>
                Get in touch with us!
            </Modal.Header>
            <Modal.Content>
                <Form onSubmit={sendEmail}>
                    
                    <Input 
                        fluid
                        label="Your Name"
                        name="from_name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input 
                        fluid 
                        label="Your Phone"
                        name="from_contact"
                        type="number"
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        style={{margin: "10px 0"}}
                    />     
                    
                    <Input 
                        fluid 
                        label="Your Email"
                        name="from_mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input 
                        fluid 
                        label="Your College" 
                        name="from_college"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        style={{margin:"20px 0"}}
                    />

                    <div className='Contact__TextRow'>
                        <div className='Contact__TextRow--label'>
                            Why do you want to join pre Entrepreneur?
                        </div>
                        <TextArea 
                            placeholder="Tell us why do you want to join us" 
                            name="from_whyjoin"
                            value={whyJoin}
                            onChange={(e) => setWhyJoin(e.target.value)}
                            style={textAreaStyle}/>
                    </div>

                    <div className='Contact__TextRow'>
                        <div className='Contact__TextRow--label'>
                            Tell us a little about yourself
                        </div>
                        <TextArea 
                            placeholder="Your skills, your likes and dislikes and things you're passionate about in life" 
                            name="from_aboutYourself"
                            value={aboutYourself}
                            onChange={(e)=> setAboutYourself(e.target.value)}
                            style={textAreaStyle}/>
                    </div>
                    
                    <Button type="submit">Submit</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default ContactForm
