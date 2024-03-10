
import './App.css';
import Disorders from './Disorders';
import Topbar from './Topbar';



function App() {


  // const onAdd = () => {
  //   set
  // }

// //add comment
// const addComment = (string) => {
//   const id=Math.floor(Math.random()*10000+1)
//   const newTask = {id, ...task}
//   //sets task as the current array plus the new one
//   setTasks([...tasks, newTask])

// }

  return (
    <div>
      <Topbar/>
      <Disorders />
    </div>
  );
}

export default App;
