import { useSelector, useDispatch } from 'react-redux'
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' })
  }
  const decrement = () => {
    dispatch({ type: 'DEC' })
  }
  const add = () => {
    dispatch({ type: 'ADD',payload:10 })
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={add}>Add Value</button>
    </div>
  );
}

export default App;
