import { useState } from 'react';

function TodoForm({ addTask, list }) {

  const [task, setTask] = useState('');

  const handleInputChange = (text) => {
    setTask(text.target.value);
  }

  const newTask = () => {
    let x = document.querySelector("input").value;
    let y = list.filter(item => item.taskItem == x);
    if (x == '') {
      alert("Input field must be filled.");
    } else if (y.length > 0) {
      alert("Item already exists");
      document.querySelector("input").value = '';
    } else {
      addTask(task);
      document.querySelector("input").value = '';
    }
  }

  return (
    <div className="row">
      <div className="col-md-9">
        <input
          className="mb-1 form-control"
          type="text"
          placeholder="New Task"
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-3 d-grid">
        <button onClick={newTask} className="btn btn-primary">
          Add Task
        </button>
      </div>
    </div>
  )
}

export default TodoForm;
