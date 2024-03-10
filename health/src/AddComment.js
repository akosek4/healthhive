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
        

        if (disorder.name == "Clinical Depression") {
          disorder.id = "65ed43dad3bd2e37a8591fd7"
        } else if (disorder.name == "Anxiety Disorder") {
            disorder.id = "65ed44b3d3bd2e37a8591fd8"
        } else if (disorder.name == "Psoriasis") {
          disorder.id = "65ed4538d3bd2e37a8591fd9"
        } else if (disorder.name == "Tinnitus") {
          disorder.id = "65ed4592d3bd2e37a8591fda"
        } else if (disorder.name == "Narcolepsy") {
          disorder.id = "65ed4640d3bd2e37a8591fdb"
        } else {
          disorder.id = "65ed46f7d3bd2e37a8591fdc"
        }



        console.log("disorder id:" + disorder.id);
        console.log(disorders);
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
