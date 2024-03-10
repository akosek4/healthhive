import React from 'react'

const ViewBtn = ({text, onClick}) => {
  return (
    <button
    onClick={onClick}>
        {text}
    </button>
  )
}

export default ViewBtn
