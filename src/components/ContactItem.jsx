import React from 'react'

function ContactItem({ contact, index, deleteContact }) {
    return (
        <>
            <li key={index}>
                {index + 1}. {contact.userName} - {contact.email}
                <button onClick={() => deleteContact(index)}>Delete</button>
            </li>
        </>
    )
}

export default ContactItem