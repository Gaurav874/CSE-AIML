import React, { useState } from 'react'

const ColorChange = () => {
    const [color,setColor]=useState('white')
  return (
    <div>
      <h2 style={{color:color}}>My favorite color is red!</h2>
      
      <button onClick={()=>{
        setColor('Blue')
      }}>Blue</button>
        <button onClick={()=>{
        setColor('Red')
      }}>Red</button>
        <button onClick={()=>{
        setColor('Pink')
      }}>Pink</button>
        <button onClick={()=>{
        setColor('Green')
      }}>Green</button>
    </div>
  )
}

export default ColorChange
