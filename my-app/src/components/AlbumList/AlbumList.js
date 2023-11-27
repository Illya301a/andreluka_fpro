import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import "./album-list.css"

export default function AlbumList() {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data));
    }, [userId]);

    return (
        <div className="album-list-container">
            <h2>Список альбомів користувача №{userId}</h2>
            <ul>
                {albums.map(album => (
                    <li className="album-list-item" key={album.id}>
                        <Link className="album-list-link" to={`/photos/${album.id}`}>{album.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

