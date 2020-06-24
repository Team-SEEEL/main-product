import React from 'react';

const Photo = (props) => {
    const photo = props.photo;
    const hoverHandler = props.hoverHandler;

    return (
        <li className="photo">
            <img src={photo} className="photo-item" onMouseEnter={hoverHandler}/>
        </li> 

    )
}

export default Photo;