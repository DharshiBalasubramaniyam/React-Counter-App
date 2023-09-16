import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count+1);
  }
  function decreaseCount() {
    (count>0) ? setCount(count-1) : setCount(count);
  }
  return (
    <section>
      <div className='container'>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div classname='btns'>
          <button
            onClick={decreaseCount}
          >
            Decrease
          </button>
          <button
             onClick={increaseCount}
          >
            Increase
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
