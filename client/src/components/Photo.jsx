import React from 'react';

const Photo = (props) => {
    const photo = props.photo;

    return (
        <li className="photo">
            <img src={photo.imageUrl} className="photo-item"/>
        </li> 

    )
}

export default Photo;