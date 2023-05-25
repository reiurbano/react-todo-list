import { useState } from 'react';

function TodoForm({ addTask }) {

  const [id, setId] = useState(0);

  const [task, setTask] = useState({
    taskItem: '',
    completionStatus: false,
    id: id
  });

  const handleInputChange = (text) => {
    setTask({
      taskItem: text.target.value,
      completionStatus: false,
      id: id
    });
  }

  const newTask = () => {
    addTask(task);
    setId(id + 1);
    document.querySelector("input").value = '';
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
