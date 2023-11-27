import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "./photo-list.css"

export default function PhotoList() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, [albumId]);

    return (
        <div className="photo-list-container">
            <h2>Фото з альбому №{albumId}</h2>
            <ul style={{listStyleType: "none"}}>
                {photos.map(photo => (
                    <li className="photo-list-item" key={photo.id}>
                        <img className="photo-list-img" alt={photo.title} src={photo.url}/> <br/>
                        {photo.title +(".")}
                    </li>
                ))}
            </ul>
        </div>
    );
};