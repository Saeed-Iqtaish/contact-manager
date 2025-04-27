import React from 'react'

function ContactItem({ contact, index }) {
    return (
        <>
            <li key={index}>
                {index + 1}. {contact.userName} - {contact.email}
            </li>
        </>
    )
}

export default ContactItem