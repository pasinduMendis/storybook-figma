
import './App.css';
import Button from './components/button/button';

function App() {
  const handleClick=()=>{
    console.log("my test")
  }
  return (
    <div className="App">
      <Button label="test" backgroundColor = "green" size = "md" handleClick={()=>{handleClick()}}  />
    </div>
  );
}

export default App;
