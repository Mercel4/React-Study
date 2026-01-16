import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(true);

  const onClickButton = (value) => {
    setCount(count + value);
  }

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('Mounting Completed');
  }, []);

  // 2. 업데이트 : 변화, 리랜더링
  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
      return;
    }
    console.log('Updating Completed');
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App;
