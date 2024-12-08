import React, { useState } from 'react'

const State3 = () => {
  const [total,setTotal]=useState(0);
  return (
    <div>
      <h2>Total: {total}</h2> 
      <button onClick={()=>{
        setTotal(total+1);
      }}
      >
        increasing
        </button>

        <button onClick={()=>{
         setTotal(total-1);
        }}>
            decreasing
        </button>
    </div>
  )
}

export default State3
