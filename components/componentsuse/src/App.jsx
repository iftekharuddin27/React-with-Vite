import Hungry from './Hungry'
import Counter from './usecase';
import Library from './Library';
import Login from './Login'; 
import Books from './Books';
import './App.css'

function App() {


  return (
    <>
      <h1>Welcome to Components Use Example</h1>
      <h3>Course Details</h3>
      <Student name="Iftekhar"age= "23" ></Student>
      <Teacher name="Wasif Reza" subject="CSE438"></Teacher>
      <Player name="Mushi" runs="10000" ></Player>
      <Hungry hungry="Yes" Do="Eat" ></Hungry>
      <Hungry hungry="No" Do="Sleep" ></Hungry>
      <Books></Books>
      <Library></Library>
      <Counter></Counter>
      <Login></Login>




    </>
  )
}

function Player({name,runs}){
  return(
    <div style={{
      border: '2px solid gray' ,
      borderRadius : '10px',
      margin: '5px'
    }}>
      <p>Player Name : {name} </p>
      <p>Player Runs : {runs}</p>
    </div>
  )
}

function Student(props){
  return(
    <div style={{
      border: '2px solid salmon' ,
      borderRadius : '10px',
      margin: '5px'
    }}>
    <p>Name: {props.name} </p>
    <p>Age: {props.age} </p>
    </div>

  )
}

function Teacher(props){
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: "10px",
      margin: '5px'
    }}>
      <p>Name: {props.name}</p>
      <p>Subject: {props.subject}</p>
    </div>
  )
}

export default App
