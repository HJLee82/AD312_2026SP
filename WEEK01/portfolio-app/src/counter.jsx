import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleIncrementAfterDelay() {
    setTimeout(() => {
      setCount(count + 1)
    }, 2000)
  }

  function handleIncrementTwice() {
    setCount(count + 1)
    setCount(count + 1)
  }

  function handleCorrectIncrementTwice() {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      gap: '20px'
    }}>
      <h1 style={{ margin: 0 }}>{count}</h1>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAfterDelay}>Increment After Delay</button>
        <button onClick={handleIncrementTwice}>Increment Twice</button>
        <button onClick={handleCorrectIncrementTwice}>Correct Increment Twice</button>
      </div>
    </div>
  )
}

export default Counter