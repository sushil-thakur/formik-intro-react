import React, { useState } from 'react'

const DisplayName = () => {
  const[userName, setUserName] = useState('')
  return (
    <div>
      <h3>{userName}</h3>
      <input
      type='text'
      placeholder='Enter your name'
      onChange={(event)=>{
        console.log(event.target.value);
        setUserName(event.target.value);
      }}/>
    </div>
  )
}

export default DisplayName