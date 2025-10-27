import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [c, setc]= useState(0)


  const addvalue = () => {
    if( c < 20)
    setc(c = c + 1)
  } 

    const removevalue = () => {
      if( c >= 1)
    setc(c = c - 1)
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
      <button
      onClick = {removevalue}
      >Remove value </button>
    </>
  )
}

export default App
