function TodoItem({ task, status, id, del}) {

  return (
    <div className={`alert ${status ? `bg-success-subtle`: `bg-primary-subtle`} mt-3 d-flex justify-content-around`}>
      <span className={`fw-bold ${status ? `strike`: ``}`}>{task}</span>
      <button onClick={() => del(id)} className="btn btn-danger">Delete</button>
      <button className="btn btn-success">Check</button>
    </div>
  )
}

export default TodoItem;