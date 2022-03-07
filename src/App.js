import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App () {

  const [todos, setTodos] = useState([
    {text: "Learn about React"},
    {text: "Meet friend for lunch"},
    {text: "Build a cool react todo app"}
  ])
  
  return (
    <div></div>
  );

}

export default App;
