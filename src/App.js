import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';

function App() {

  const [contact,setContact] = useState([]);
  
  const addContact = (newContact) => {
    setContact([...contact,newContact])
  }


  //to check if contacts are being added or not
  useEffect(() => {
    console.log(contact);
  }, [contact]);
  

  return (
    <>
    <ContactForm addContact = {addContact}/>
    </>
  );
}

export default App;
