import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDos, setToDos] = useState([
    {name: "Buy Shopping", priorityHigh: true},
    {name: "Clean Kitchen", priorityHigh: false},
    {name: "Water Plants", priorityHigh: true}
  ])

  const [newToDoName, setNewToDoName] = useState("")
  const [newToDoPriority, setNewToDoPriority] = useState(false)
  


  // This deep copies the todo array and pushes the new ToDo to the array, then sets the state of the ToDos to the new array 
  const saveNewToDo = (event) => {
    event.preventDefault()
    const newToDo = {name: newToDoName, priorityHigh: newToDoPriority}
    const copyTodos= [...toDos]
    copyTodos.push(newToDo)
    setToDos(copyTodos)
  }

  const toDoNodes = toDos.map((toDo, index) => {
    return (
      <li key={index} className={toDo.priorityHigh ? "high-priority" : "low-priority"}>
        <span>{toDo.name}</span>
        {toDo.priorityHigh ? <span>High Priority!</span> : <span>Low Priority</span>}
      </li>
    )
  })

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <hr></hr>

      <form onSubmit={saveNewToDo}>
        <label htmlFor="new-toDo">Add a new toDo</label>
        <input id="new-toDo" type="text" name={newToDoName} onChange={(event) => setNewToDoName(event.target.value)}></input>
        <label htmlFor="priority-high">High Priority</label>
        <input type="radio" id="priority-high" name="priorityLevel" value="true" onClick={(event) => setNewToDoPriority(event.target.value)}></input>
        <label htmlFor="priority-low">Low Priority</label>
        <input type="radio" id="priority-low" name="priorityLevel" value="" onClick={(event) => setNewToDoPriority(event.target.value)}></input>
        <input id="new-toDo--submit" type="submit" value="Save new To-Do"></input>
      </form>

      <ul>
        {toDoNodes}
      </ul>
    </div>
  );
}

export default App;
