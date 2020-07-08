import React from 'react';

const ModalPhoto = (props) => {
    let { currentPhoto, hoverExit, isHovered, photo, hoverHandler, modalHoverHandler } = props;

    let classPhotoName = isHovered ? "hovered-photo" : "single-modal-photo" 

    if (currentPhoto === photo) {
        return (
            <div className="modal-photo">
                <img className={classPhotoName} src={photo} onMouseLeave={hoverExit} onMouseEnter={hoverHandler}/>
            </div> 
        )
    }

    return (
        <div className="modal-photo">
            <img className="single-modal-photo" src={photo} onMouseLeave={hoverExit} onMouseEnter={hoverHandler}/>
        </div> 
    )
}

export default ModalPhoto;