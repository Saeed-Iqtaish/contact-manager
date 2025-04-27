import React from 'react'
import ContactItem from './ContactItem'
import '../css/ContactList.css';

function ContactList(props) {
    return (
        <div className="contact-list">
            <h2>Contact List</h2>
            <ul>
                {props.contact.length === 0 ? (
                    <li>No contacts available</li>
                ) : (
                    props.contact.map((contact, index) => (
                        <ContactItem
                            key={index}
                            contact={contact}
                            index={index}
                            deleteContact={props.deleteContact}
                        />
                    ))
                )}
            </ul>
        </div>
    )
}

export default ContactList