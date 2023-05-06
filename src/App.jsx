import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (op)=>{
    switch(op){
      case '+':
          setCount(count+1)
          break;
      case '-':
          setCount(count-1)
          break;
      default:
        setCount(0)
    }
  }

  return (
    <>
    <h1>Counter Application</h1>
    <h1 style={{color: count < 0 ? 'red' : 'green'}}>{count}</h1>
    <button onClick={()=>handleClick('+')}>Increase ＋</button>
    <button onClick={()=>handleClick('-')}>Decrease －</button>
    <button onClick={handleClick}>Reset ⎌</button>
    </>
  )
}

export default App
