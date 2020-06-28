import React from 'react';
import Photo from './Photo.jsx'

const Photos = (props) => {
    let currentPhoto = props.currentPhoto;
    let hoverExit = props.hoverExit;
    let isHovered = props.isHovered;
    let photos = props.photos;
    let hoverHandler = props.hoverHandler;
    console.log(photos, 'line 6 from Photos.jsx')

    return (
    <div className="photos">
      <ul>
        {
          photos.map((photo) => {
            return <Photo currentPhoto={currentPhoto} hoverHandler={hoverHandler} hoverExit={hoverExit} isHovered={isHovered} photo={photo} />
          })
        }
      </ul>
    </div>
  )
};

export default Photos;