import React, { useState } from 'react';

const Count = () => {

    const [count, setCount] =useState(0);
  return (
    <div className='App'>
      <h1> Update angka : {count}</h1>
      <button onClick={() =>{setCount(count+ 1)} }> Tambah angka </button>
      <p> Belajar React</p>
    </div>
  )
}

export default Count
