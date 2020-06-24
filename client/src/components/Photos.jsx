import React from 'react';
import Photo from './Photo.jsx'

const Photos = (props) => {
    let photos = props.photos;

    return (
    <div className="photos">
      <ul>
        {
          photos.map((photo) => {
            return <Photo key={photos._id} photo={photo} />
          })
        }
      </ul>
    </div>
  )
};

export default Photos;