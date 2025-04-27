import React from 'react'

function ContanctList(props) {
    return (
        <>
            <div>
                <ul>
                    {props.contact.length === 0 ? (
                        <li>No contacts available</li>
                    ) : (
                        props.contact.map((contact, index) => (
                            <li key={index}>
                                {index + 1}. {contact.userName} - {contact.email}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    )
}

export default ContanctList