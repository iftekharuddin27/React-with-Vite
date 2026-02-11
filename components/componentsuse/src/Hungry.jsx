export default function Hungry({hungry, Do}){
  return(
       <div style={{
      border: '2px solid orange' ,
      borderRadius : '10px',
      margin: '5px'
    }}>
      <p>Hungry? : {hungry} </p>
      <p> Activity : {Do} </p>
    </div>
  )
}