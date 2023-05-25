function TodoItem({ task, status, id, del, fin}) {

  return (
    <div className={`alert ${status ? `bg-success-subtle`: `bg-primary-subtle`} mt-3 d-flex align-items-center`}>
      <span className={`fw-bold flex-grow-1 ${status ? `strike`: ``}`}>{task}</span>
      <button onClick={() => del(id)} className="btn btn-danger me-3">Delete</button>
      <button onClick={() => fin(id)} className="btn btn-success me-3">Check</button>
    </div>
  )
}

export default TodoItem;