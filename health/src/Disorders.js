import React from 'react'
import Disorder from './Disorder'
import { useState } from 'react'

const Disorders = () => {
  const [disorders, setDisorders] = useState(
    [
      {
        id: 1, 
        name: "Depression",
        text: "prolonged sadness and lack of motivation",
        comments: [
          'a walk every day helps',
          'i was misdiagnosed twice',
          'you guys are so strong!',
          'my doctor just increased my dosage!!']
      }, 
      {
        id: 2, 
        name: "ADHD",
        text: "difficulties focusing",
        comments: ['i feel like its rlly affecting my grades :(',
        'i heard mushrooms are good for focusing']
      }
    ]
  )
  return (
    <>
      {disorders.map((disorder) => (
        <Disorder key={disorder.id}
        disorder={disorder} setDisorders={setDisorders}  disorders={disorders}/>
      ))}
    </>
  )
}

export default Disorders
