import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const data = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("my-contacts");
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    }
    return data;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("my-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      console.log(prevContacts);
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
