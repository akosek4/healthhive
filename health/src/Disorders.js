import React from 'react'
import Disorder from './Disorder'

const Disorders = ({disorders}) => {
  return (
    <>
      {disorders.map((disorder) => (
        <Disorder key={disorder.id}
        disorder={disorder}/>
      ))}
    </>
  )
}

export default Disorders
