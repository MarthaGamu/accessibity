import React,{useState} from 'react'

export default function NewUseState({name}) {
const [count, setCount] = useState(0)
  return (
    <>
     <button onClick={() => setCount(count+ 1)}>Increment  </button>
     <span>{count}</span>
     <button onClick={() => setCount(count - 1)}>Increment  </button>
    </>
  )
}
