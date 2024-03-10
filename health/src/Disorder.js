import React from 'react'
import ViewBtn from './ViewBtn'
import { useState } from 'react';
import Comments from './Comments'
import AddComment from './AddComment'


const Disorder = ({disorder, setDisorders, disorders}) => {
  const [showAdd, setShowAdd] = useState(false)


  return (
    <div className='Disorder'>
        <h1>
            {disorder.name}
        </h1>
        <h2>
          </h2>
        <p>
            {disorder.text}
        </p>
        <div>
          {showAdd ? <Comments comments={disorder.comments}/> : ''}
        </div>
        <div>
          {showAdd ? <AddComment disorder={disorder} disorders={disorders} setDisorders={setDisorders}/> : ''}
        </div>
        <ViewBtn
        text={showAdd ? 'Hide Comments' : 'Show Comments'}
        onClick={() => setShowAdd(!showAdd)}>
        </ViewBtn>
    </div>
  )
}

export default Disorder
