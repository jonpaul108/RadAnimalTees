import React, {useState} from 'react';
import { flexbox } from '@material-ui/system';

const formContainer = {
    height: '50vh',
    width: '50%',
    minWidth: '400px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
};

const formStyle = {
    height: '300px',
    width: '300px',
}
const ContactForm = () => {

    const [inputs, setInputs] = useState({});
    const handleOnChange = (e) => {
        setInputs({...inputs, [e.target.name]:[e.target.value]});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div style={formContainer} className='formContainer'>
            huh?????????
            <form id="contact-form" style={formStyle} className='form'>
                <label>Name</label>
                <input type="text" name="name" value={inputs.name} onChange={handleOnChange} />
                <label>Email</label>
                <input type="email" name="email" value={inputs.email} onChange={handleOnChange}/>
                <label>Message</label>
                <input name="message" type='text' value={inputs.message} onChange={handleOnChange}/>
                <input type="submit" value="Send" onSubmit={handleOnSubmit} />
            </form>
         </div>
    )
};

export default ContactForm;