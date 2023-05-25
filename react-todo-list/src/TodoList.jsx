import TodoItem from './TodoItem';

function TodoList({ list, del }) {

  const taskList = list.map(item => (
    <TodoItem
      task={item.taskItem}
      status={item.completionStatus}
      id={item.id}
      del={del}
    />
  ));

  return (
    <div>
      { taskList }
    </div>
  )
}

export default TodoList;