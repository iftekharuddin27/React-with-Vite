import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='mb-5'>Cards for sale</h1>
    <Card username="Mr. Monkey" Price="2.00 $" serial='#277'/>
    <br /><br />
    <Card username='Lufy D Monkey' Price="5.00 $" serial='#278'/>
    </>
  )
}

export default App
