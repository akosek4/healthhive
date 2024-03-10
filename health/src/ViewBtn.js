import React from 'react'

const ViewBtn = ({text, onClick}) => {
  return (
    <button className='Button'
    onClick={onClick}>
        {text}
    </button>
  )
}

export default ViewBtn
