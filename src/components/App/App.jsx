import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";
import contactsData from "../contactsData.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("my-contacts");
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    }
    return contactsData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("my-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteData = (dataId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== dataId);
    });
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} onDelete={deleteData} />
    </div>
  );
}

export default App;
