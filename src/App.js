import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDos, setToDos] = useState([
    {name: "Buy Shopping", priority: "high"},
    {name: "Clean Kitchen", priority: "low"},
    {name: "Water Plants", priority: "high"}
  ])

  const [newToDo, setNewToDo] = useState("")

  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }

  const saveNewToDo = (event) => {
    event.preventDefault()
    const copyTodos= [...toDos]
    copyTodos.push({name: newToDo, priority: "low"})
    setToDos(copyTodos)
  }

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

      <form onSubmit={saveNewToDo}>
        <label htmlFor="new-toDo">Add a new toDo</label>
        <input id="new-toDo" type="text" value={newToDo} onChange={handleToDoInput}></input>
        <input id="new-toDo--submit" type="submit" value="Save new To-Do"></input>
      </form>

      <ul>
        {toDoNodes}
      </ul>
    </div>
  );
}

export default App;
