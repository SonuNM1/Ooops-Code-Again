
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {

  const count = useSelector((state) => state.counter.value) ; 

  const dispatch = useDispatch() ; // dispatch action from store 

  const [amount, setAmount] = useState(0) ; 

  function handleIncrementClick(){
    dispatch(increment())
  }

  function handleDecrementClick(){
    dispatch(decrement()) ; 
  }

  function handleReset(){
    dispatch(reset()) ; 
  }

  function handleIncrementAmount(){
    dispatch(incrementByAmount(amount)) ; 
  }

  return (
    <div className='App'>
        <button onClick={handleIncrementClick}>
          +
        </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>
          -
        </button>
        
        <button onClick={handleReset}>
          Reset
        </button>

        <input
          type='Number'
          value={amount}
          placeholder='Enter amount'
          onChange={(e) => setAmount(e.target.value)} 
        />

        <button onClick={handleIncrementAmount} >
          Inc By Amount
        </button>

    </div>
  );
}

export default App;
