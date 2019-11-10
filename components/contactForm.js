import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const formContainer = {
    height: '50vh',
    width: '70%',
    minWidth: '400px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
};

const formStyle = {
    backgroundColor: 'rgb(215, 208, 200, 0.1)',
    minHeight: '500px',
    height: '500px',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
}

// const spanStyle1 = {
//     width: '75%',
//     height: '50%',
//     margin: 'auto',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
// }

// const spanStyle2 = {
//     width: '75%',
//     height: '50%',
//     margin: 'auto',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
// }
const infoContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
}
const inputInfoStyle = {
    height: '1rem',
    flexGrowth: 0,
    margin: '1rem 0',
    border: '1px solid grey',
    width: '75%',
}

const inputInfo2 = {
    height: '1rem',
    flexGrowth: 0,
    margin: '1rem 0',
    border: '1px solid grey',
    width: '100%',
}

const messageStyle ={
    flexGrowth: 1,
    width: '75%',
    height: '8rem',
    border: '1px solid grey',
}

const submitStyle = {
    backgroundColor : 'rgba(85, 25,139,0.7)',
    width: '5rem',
    height: '2rem',
    marginTop:'1rem',
}

const ContactForm = () => {
    const sendFeedback = (templateId, variables) => {
        console.log('ran send feedback');
        emailjs.send(
        'default_service' , templateId,
          variables, 'user_KSNeRW6sHLB0rdTwFcLrc'
          ).then(res => {
            console.log('Email successfully sent!')
          })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      };

    const [inputs, setInputs] = useState({message: '', name: '', email: ''});

    const handleOnChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value});
    };

    const emailParams =  {
        message_html: inputs.message,
        from_name: inputs.name,
        reply_to: inputs.email,
        to_name: 'radanimal'
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const templateId = 'template_72ukv2xI';
        sendFeedback(templateId, emailParams);
    };

    return (
        <div style={formContainer} className='formContainer'>
            <form id="contact-form" style={formStyle} className='form' >
                        <label>Name: </label>
                        <input type="text" name="name" value={inputs.name} onChange={handleOnChange} className='inputInfoStyle' style={inputInfoStyle} required />
                        <label>Email: </label>
                        <input type="email" name="email" value={inputs.email} onChange={handleOnChange} className='inputInfoStyle' style={inputInfoStyle} required />
                    <label>Message: </label>
                    <textarea name="message" type='text' value={inputs.message} onChange={handleOnChange} style={messageStyle} required/>
                    <input type="submit" value="Send" onSubmit={handleOnSubmit} style={submitStyle}/>
            </form>
         </div>
    )
};

export default ContactForm;