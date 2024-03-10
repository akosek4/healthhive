import React from 'react'

const Comments = ({comments}) => {
    const disorderComments = comments.map((comment, index) => (
    <li key={index}>{comment}</li>
));

  return (
    <div>
    <ul className='Comments'>
        {disorderComments}
    </ul>
    </div>
  )
}

export default Comments
