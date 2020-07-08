import React from 'react'

const Description = (props) => {

let description = props.description

return (
    <div className="description">
      <br></br>
        {description}
    </div>
  )
}

export default Description;