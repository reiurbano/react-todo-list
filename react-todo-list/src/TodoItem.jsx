function TodoItem({ task, status, id, del, fin }) {

  if (status == 1) {
    status = true;
  } else {
    status = false;
  }

  return (
    <div className={`alert ${(status) ? `bg-success-subtle`: `bg-primary-subtle`} mt-3 d-flex flex-wrap align-items-center justify-content-end`}>
      <span className={`fw-bold overflow-x-hidden flex-grow-1 mt-1 ${(status) ? `strike`: ``}`}>- {task}</span>
      <button onClick={() => del(id)} className="btn btn-danger me-3 mt-1">Delete</button>
      <button onClick={() => fin(id, !status)} className="btn btn-success me-3 mt-1">Check</button>
    </div>
  )
}

export default TodoItem;