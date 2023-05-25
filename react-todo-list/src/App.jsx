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

  return (
    <main className="container p-5 mt-5 border shadow">
      <h1 className="fw-bold">Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList list={tasks} del={delTask}/>
    </main>
  )
}

export default App;
