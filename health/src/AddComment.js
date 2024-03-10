import React from 'react'
import { useState } from 'react'
 
const AddComment = ({disorder, disorders, setDisorders}) => {
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!comment) {
            alert("Please add a comment")
            return
        }
        console.log(comment);


        const disorderToUpdate = disorders.find(d => d.id === disorder.id)

        const updatedComments = [...disorderToUpdate.comments, comment]

        const updatedDisorderEntry = {...disorderToUpdate, comments: updatedComments}

        const updatedDisorders = disorders.map(d =>d.id === disorder.id ? updatedDisorderEntry : d)

        setDisorders(updatedDisorders)

        setComment('')

    }


  return (
    <form className= 'AddComment' onSubmit={handleSubmit}>
        <input className='AddCommentInput' type='text' placeholder='Add comment' value={comment} onChange={(e)=>setComment(e.target.value)}/>
        <input className= 'Button' type='submit' value='Comment' />
    </form>
  )
}

export default AddComment
