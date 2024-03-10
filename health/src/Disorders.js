import React from 'react'
import Disorder from './Disorder'
import { useState, useEffect } from "react";
import axios from "axios";

const Disorders = () => {
  const [disorders, setDisorders] = useState([])
  useEffect(() => {
      axios.get("/api/items")
      .then(response => {
        //console.log(response);
        setDisorders(response.data);
      })
      .catch(error => console.error(error));
  }, []);

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
