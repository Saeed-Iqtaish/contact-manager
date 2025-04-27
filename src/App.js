import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContanctList from './components/ContanctList';

function App() {

  const [contact,setContact] = useState([]);
  
  const addContact = (newContact) => {
    setContact([...contact,newContact])
  }
  

  return (
    <>
    <ContactForm addContact = {addContact}/>
    <ContanctList contact = {contact}/>
    </>
  );
}

export default App;
