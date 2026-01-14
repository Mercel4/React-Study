import './App.css'
import { useState } from 'react'

const Bulb = ({light}) => {
  console.log(light);
  return (
  <div>{light === "ON" ? (
  <h1 style={{backgroundColor: "orange"}}>ON</h1>
   ) : ( 
   <h1 style={{backgroundColor: "gray"}}>OFF</h1>
   )}
   </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button 
      onClick={() => {
        setCount(count + 1);
      }}>+</button>
    </div>
  );
}

function App() {
  // 왜 굳기 const대신 let을 쓰지 않는가?
  // -> let으로 할 경우 리 렌더링이 되지 않아 아무리 눌러도 값이 변하지 않음
  
  
  const [light, setLight] = useState("OFF");

  return (
    <>
    <div>
      <Bulb light={light} />
      <button
      onClick={() => {
        setLight(light === "OFF" ? "ON" : "OFF");
      }}>
        {light === "OFF" ? "켜기" : "끄기"}
      </button>
    </div>
    
    </>
    
  )
}

export default App