import React from 'react'
import ContactItem from './ContactItem'

function ContanctList(props) {
    return (
        <>
            <ul>
                {props.contact.length === 0 ? (
                    <li>No contacts available</li>
                ) : (
                    props.contact.map((contact, index) => (
                        <li key={index}>
                            {props.contact.map((contact, index) => <ContactItem contact={contact} index={index} />)}
                        </li>
                    ))
                )}
            </ul>
        </>
    )
}

export default ContanctList