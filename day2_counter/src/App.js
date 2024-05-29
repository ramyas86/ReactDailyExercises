import './App.css';
import CounterComp from './counter';

function App() {

 
return (
  <>
    <CounterComp count={0} />
    <br></br>
    <br></br>
    <hr></hr>
    <CounterComp count={5} />
  </>
)
};

export default App;
