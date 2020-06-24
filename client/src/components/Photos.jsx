import React from 'react';
import Photo from './Photo.jsx'

const Photos = (props) => {
    let photos = props.photos;
    let hoverHandler = props.hoverHandler;
    console.log(photos, 'line 6 from Photos.jsx')

    return (
    <div className="photos">
      <ul>
        {
          photos.map((photo) => {
            return <Photo hoverHandler={hoverHandler} photo={photo} />
          })
        }
      </ul>
    </div>
  )
};

export default Photos;