
import './App.css';
import Disorders from './Disorders';
import Topbar from './Topbar';



function App() {

  return (
    <div>
      <Topbar/>
      <Disorders className='Container'/>
    </div>
  );
}

export default App;
