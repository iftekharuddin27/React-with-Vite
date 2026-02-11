import { useState } from 'react'
import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  
  return (
    <>
     <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Current Count: {count}</h1>
      
      <div style={{ gap: '10px', display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleIncrease}>Increase (+1)</button>
        <button onClick={handleDecrease}>Decrease (-1)</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div> 
    </>
  )
}

export default CounterApp
