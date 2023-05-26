import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      task
    ]);
  }

  const delTask = (prop) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(item => item.id !== prop)
    })
  }

  const finTask = (prop) => {
    let tempArr = tasks.map(item => {
      if(item.id == prop) {
        return ({...item, completionStatus: !item.completionStatus})
      }
      return item;
    })
    setTasks(tempArr);
  }

  return (
    <main className="container p-5 mt-5 border shadow">
      <h1 className="fw-bold">Todo List</h1>
      <TodoForm list={tasks} addTask={addTask} />
      <TodoList list={tasks} del={delTask} fin={finTask}/>
    </main>
  )
}

export default App;
