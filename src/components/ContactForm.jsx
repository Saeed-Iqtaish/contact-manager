import React from 'react'
import { useState } from 'react'

function ContactForm(props) {


    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const addContact = (e) => {
        e.preventDefault();

        let contact = {
            userName,
            email
        };

        props.addContact(contact);

        setUserName("");
        setEmail("");
    }

    return (
        <>
            <h2>Add a Contact</h2>
            <form onSubmit={addContact}>
                <input
                    type="text"
                    placeholder='Name'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">
                    Add
                </button>
            </form>
        </>
    )
}


export default ContactForm