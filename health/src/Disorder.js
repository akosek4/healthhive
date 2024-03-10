import React from 'react'
import ViewBtn from './ViewBtn'
import { useState } from 'react';


const Disorder = ({disorder}) => {
  const [showAdd, setShowAdd] = useState(false)

  return (
    <div>
        <h3>
            {disorder.name}
        </h3>
        <p>
            {disorder.text}
        </p>
        <ViewBtn
        text={showAdd ? 'Hide Comments' : 'Show Comments'}
        onClick={() => setShowAdd(!showAdd)}>
        </ViewBtn>
    </div>
  )
}

export default Disorder
