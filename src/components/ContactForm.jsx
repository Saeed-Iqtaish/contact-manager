import React from 'react'
import { useState } from 'react'

function ContactForm() {


    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <h2>Add a Contact</h2>
            <form>
                <input
                    type="text"
                    placeholder='Name'
                />

                <input
                    type="text"
                    placeholder="Email"
                />

                <button type="submit">
                    Add
                </button>
            </form>
        </>
    )
}


export default ContactForm