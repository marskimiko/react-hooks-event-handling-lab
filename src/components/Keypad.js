// Code Keypad Component Here
import React from 'react';

function Keypad() {
  function handleChange(event) {
    console.log(`'Entering password...': ${event.target.value}`)
  }
  return (
    <>
    <input type="password" onChange={handleChange}/>
    </>
  )
}

export default Keypad;