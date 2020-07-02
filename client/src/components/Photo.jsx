import React from 'react';

const Photo = (props) => {
    let { currentPhoto, hoverExit, isHovered, photo, hoverHandler } = props;

    let classPhotoName = isHovered ? "hovered-photo" : "single-photo" 

    if (currentPhoto === photo) {
        return (
            <div className="photo">
                <img className={classPhotoName} src={photo} onMouseLeave={hoverExit} onMouseEnter={hoverHandler}/>
            </div> 
        )
    }

    return (
        <div className="photo">
            <img className="single-photo" src={photo} onMouseLeave={hoverExit} onMouseEnter={hoverHandler}/>
        </div> 
    )
}

export default Photo;