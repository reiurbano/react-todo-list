import { useState } from 'react';
import { useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [tasks, setTasks] = useState([]);

  const [count, addCount] = useState(0);

  const fetchData = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost/KodeGo/react-todo-list/getlist.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        setTasks(result);
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    fetchData();
  }, [count])

  const addTask = (task) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "description": `${task}`
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'no-cors'
    };

    fetch("http://localhost/KodeGo/react-todo-list/insert.php", requestOptions)
      .then(response => response.text())
      .then(() => addCount(count + 1))
      .catch(error => console.log('error', error));
  }

  const delTask = (prop) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "id": `${prop}`
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'no-cors'
    };

    fetch("http://localhost/KodeGo/react-todo-list/delete.php", requestOptions)
      .then(response => response.text())
      .then(() => addCount(count - 1))
      .catch(error => console.log('error', error));
  }

  const finTask = (prop1, prop2) => {

    if (prop2 == true) {
      prop2  = 1;
    } else {
      prop2 = 0;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "id": `${prop1}`,
      "status": `${prop2}`
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'no-cors'
    };

    fetch("http://localhost/KodeGo/react-todo-list/update.php", requestOptions)
      .then(response => response.text())
      .then(() => addCount(count + 1))
      .catch(error => console.log('error', error));
  }

  return (
    <main className="container p-5 mt-5 border shadow">
      <h1 className="fw-bold">Todo List</h1>
      <TodoForm list={tasks} addTask={addTask} />
      <TodoList list={tasks} del={delTask} fin={finTask} />
    </main>
  )
}

export default App;
