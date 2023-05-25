import TodoItem from './TodoItem';

function TodoList({ list, del, fin }) {

  const taskList = list.map(item => (
    <TodoItem
      task={item.taskItem}
      status={item.completionStatus}
      id={item.id}
      del={del}
      fin={fin}
    />
  ));

  return (
    <div>
      { taskList }
    </div>
  )
}

export default TodoList;