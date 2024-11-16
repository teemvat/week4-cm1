import React, { useState } from 'react';
import "./ContactListManager.css";

function ContactListManager() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [contacts, setContacts] = useState([]);

  const addContact = (press) => {
    press.preventDefault();
    
    if (name && email && phone) {
      const newContact = { id: Date.now(), name, email, phone };
      setContacts([...contacts, newContact]);

      // Clears input fields
      setName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-list-container">
      <h1>Contact List Manager</h1>
      
      <form onSubmit={addContact} className="contact-form">
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Phone: </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </div>

        <button type="submit" className="btn">Add Contact</button>
      </form>

      <h2>Contact List</h2>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <div 
              id='ContactBox' 
              key={contact.id}
              >

              <li>
                <p>Name: {contact.name}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <button onClick={() => deleteContact(contact.id)} className="btn btn-delete">Delete</button>
              </li>

          </div>
        ))}
      </ul>
    </div>
  );
}

export default ContactListManager
