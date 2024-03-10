
import { useState } from "react";
import "./App.css";
import Disorders from "./Disorders";
import Topbar from "./Topbar";



function App() {

  const [disorders, setDisorders] = useState([
    {
      id: 1,
      name: "Depression",
      text: "prolonged sadness and lack of motivation",
      comments: [
        "a walk every day helps",
        "i was misdiagnosed twice",
        "you guys are so strong!",
        "my doctor just increased my dosage!!",
      ],
    },
    {
      id: 2,
      name: "ADHD",
      text: "difficulties focusing",
      comments: [
        "i feel like its rlly affecting my grades :(",
        "i heard mushrooms are good for focusing",
      ],
    },
  ]);

  return (
    <div>
      <Topbar />
      <div className="Explore">Explore and Connect:</div>
      <Disorders disorders={disorders} />
    </div>
  );
}

export default App;
