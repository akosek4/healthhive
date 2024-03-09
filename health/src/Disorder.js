import React from 'react'


const Disorder = ({disorder}) => {
  return (
    <div>
        <h3>
            {disorder.name}
        </h3>
        <p>
            {disorder.text}
        </p>
      
    </div>
  )
}

export default Disorder
