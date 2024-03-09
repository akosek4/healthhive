import { useState } from 'react';
import './App.css';
import Disorders from './Disorders';
import Topbar from './Topbar';


function App() {
  const [disorders, setDisorders] = useState(
    [
      {
        id: 1, 
        name: "Depression",
        text: "prolonged sadness and lack of motivation"
      }, 
      {
        id: 2, 
        name: "ADHD",
        text: "difficulties focusing"
      }
    ]
  )

  return (
    <div>
      <Topbar/>
      <Disorders disorders={disorders}/>
    </div>
  );
}

export default App;
