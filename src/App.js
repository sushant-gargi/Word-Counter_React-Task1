import React, { useState } from 'react'
import './App.css';

const App = () => {
  const[count,setcount]=useState(0);
  const keypress=(e)=>{
    const text=e.target.value;
    const word=text.split(' ');
    setcount(word.length); 
  }
  return (
    <div id='main'>
      <h1>Responsive Paragraph Word Counter </h1>
      <textarea name="" id="textcontent" cols="30" rows="10" placeholder='Type here' onChange={keypress}></textarea>
      <h3><span>Word Count : {count}</span></h3>
    </div>
  )
}

export default App
