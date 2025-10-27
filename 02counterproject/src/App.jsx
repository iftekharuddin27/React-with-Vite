import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [c, setc]= useState(0)


  const addvalue = () => {
    setc(c = c + 1)
  } 


  return (
    <>
      <h1>Iftekhar Uddin</h1>
      <h2>Counter Value : {c} </h2>
      <button
      onClick = {addvalue}
      >Add Value</button>
      <br />
      <br />
      <button>Remove value {c} </button>
    </>
  )
}

export default App
