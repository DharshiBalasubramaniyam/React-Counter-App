import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count+1);
  }



  return (
    <section>
      <div className='container'>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div classname='btns'>
          <button>
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
