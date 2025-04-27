import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {

  const [contact,setContact] = useState([]);
  
  const addContact = (newContact) => {
    setContact([...contact,newContact])
  }

  const deleteContact = (indexToDelete) => {
    setContact(contact.filter((_, index) => index !== indexToDelete));
  };
  

  return (
    <>
    <ContactForm addContact = {addContact}/>
    <ContactList contact = {contact} deleteContact = {deleteContact}/>
    </>
  );
}

export default App;
