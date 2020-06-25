import React from 'react';

const Photo = (props) => {
    const photo = props.photo;
    const hoverHandler = props.hoverHandler;

    return (
        <div className="photo">
            <img className="single-photo" src={photo} onMouseEnter={hoverHandler}/>
        </div> 

    )
}

export default Photo;