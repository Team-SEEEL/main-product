import React from 'react'

const Description = (props) => {

return (
    <div className="description">
    <h1>Apple Airpods Pro</h1>
      <ul>
        {
          photos.map((photo) => {
            return <Photo photo={photo} />
          })
        }
      </ul>
    </div>
  )
}

export default Description;