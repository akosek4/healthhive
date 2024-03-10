import React from 'react'

const Comments = ({comments}) => {
    const disorderComments = comments.map((comment, index) => (
    <li className='Comment'key={index}>{'Anonymous User: '.concat(comment)}</li>
));

  return (
    <ul className='Comments'>
        {disorderComments}
    </ul>
  )
}

export default Comments
