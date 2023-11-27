import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import AlbumList from "./components/AlbumList/AlbumList";
import PhotoList from "./components/PhotoList/PhotoList";
import UserList from "./components/UserList/UserList";

import './App.css';


const App = () => {
    return (
        <div>
            <nav className="main-nav">
                <NavLink to="/users/" activeClassName="active">Список користувачів</NavLink>
                <NavLink to="/albums/1" activeClassName="active">Альбоми</NavLink>
                <NavLink to="/photos/1" activeClassName="active">Фото</NavLink>
            </nav>
            <Routes>
                <Route path="/albums/:userId" element={<AlbumList />} />
                <Route path="/photos/:albumId" element={<PhotoList />} />
                <Route path="/users/" element={<UserList />} />
            </Routes>
</div>
    );
};

export default App;