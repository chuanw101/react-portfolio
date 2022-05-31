import React, { useState } from 'react';
import '../../styles/Contact.css';

function Contact() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [warning, setWarning] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        // set value based on name
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleMouseLeave = (e) => {
        if (e.target.name === 'name') {
            if (name) {
                setWarning('');
            } else {
                setWarning("You must enter a name!");
            }
        } else if (e.target.name === 'message') {
            if (message) {
                setWarning('');
            } else {
                setWarning("You must enter a message!");
            }
        } else {
            if (email) {
                if (/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email)) {
                    setWarning('');
                } else {
                    setWarning("Invalid e-mail entered!")
                }
            } else {
                setWarning("You must enter an e-mail!")
            }
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert input, clear form (temp until email functionality)
        alert(`Hello ${name}, your email is ${email}, you message was ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section>
            <h1>Contact Me</h1>
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    onMouseLeave={handleMouseLeave}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onMouseLeave={handleMouseLeave}
                    type="text"
                    placeholder="E-Mail"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onMouseLeave={handleMouseLeave}
                    placeholder="Message"
                />
                <br></br>
                <p>{warning}</p>
                <br></br>
                <button type="button" onClick={handleFormSubmit}>
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;
