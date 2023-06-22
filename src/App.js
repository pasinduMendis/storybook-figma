
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button/button';

function App() {
  const handleClick=()=>{
    console.log("button working")
  }
  return (
    <div>
      <ButtonComponent  handleClick={()=>handleClick()} propStyles={{}} label="Get started"/>
    </div>
  );
}

export default App;
