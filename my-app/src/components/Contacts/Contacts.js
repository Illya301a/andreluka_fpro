import "./contacts.css"

import React, {useState, useEffect} from "react";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [newContact, setNewContact] = useState({
        firstName: '',
        lastName: '',
        phone: '',
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setContacts(data));

    }, []);

    const handleDeleteContact = (contactId) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
        setContacts(updatedContacts);
    };

    const handleShowForm = () => {
        setFormVisible(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSaveContact = () => {
        setContacts((prevContacts) => [
            ...prevContacts,
            {
                id: prevContacts.length + 1,
                name: newContact.firstName,
                username: newContact.lastName,
                phone: newContact.phone,
            },
        ]);
        setNewContact({
            firstName: '',
            lastName: '',
            phone: '',
        });
        setFormVisible(false);
    };

    const handleCancelForm = () => {
        setFormVisible(false);
        setNewContact({
            firstName: '',
            lastName: '',
            phone: '',
        });
    };

    return (
        <div>
            <h1>Contacts</h1>
            <table className="contacts-table">
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button
                                onClick={() => handleDeleteContact(contact.id)}
                                className="button"
                            >
                                Видалити
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={handleShowForm} className="button">
                Додати контакт
            </button>

            {isFormVisible && (
                <div className="add-contact-form">
                    <h2>Форма додавання нового контакту</h2>
                    <label>Ім'я: </label>
                    <input
                        type="text"
                        name="firstName"
                        value={newContact.firstName}
                        onChange={handleInputChange}
                    />

                    <label>Прізвище: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={newContact.lastName}
                        onChange={handleInputChange}
                    />

                    <label>Телефон: </label>
                    <input
                        type="text"
                        name="phone"
                        value={newContact.phone}
                        onChange={handleInputChange}
                    />

                    <button onClick={handleSaveContact} className="button">
                        Зберегти
                    </button>
                    <button onClick={handleCancelForm} className="button">
                        Скасувати
                    </button>
                </div>
            )}
        </div>
    );
}