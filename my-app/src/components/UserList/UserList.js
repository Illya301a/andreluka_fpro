import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./user-list.css"

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="user-list-container">
            <h2>Список користувачів</h2>
            <ul>
                {users.map(user => (
                    <li className="user-list-item" key={user.id}>
                        <Link className="user-list-link" to={`/albums/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
