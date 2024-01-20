import { useState } from 'react'

export default function Hook() {

  const [count, setCount] = useState(0);
  const incremetcount = () => {
    setCount(count + 1)
  }
  
  return (
    <>
      <div>
        hooks
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={incremetcount}>Incremento</button>
      </div>
      <div>
        
      </div>
    </>
  )
}