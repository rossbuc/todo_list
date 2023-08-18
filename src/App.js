import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDos, setToDos] = useState([
    {name: "Buy Shopping", priority: "high"},
    {name: "Clean Kitchen", priority: "low"},
    {name: "Water Plants", priority: "high"}
  ])

  const toDoNodes = toDos.map((toDo, index) => {
    return (
      <li key={index}>
        <span>{toDo.name}</span>
      </li>
    )
  })

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <hr></hr>

      <ul>
        {toDoNodes}
      </ul>
    </div>
  );
}

export default App;
