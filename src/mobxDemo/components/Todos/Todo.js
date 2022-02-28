import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import TodoCompleted from './TodoCompleted'
import TodoDelete from './TodoDelete'
import TodoTitle from './TodoTitle'
import TodoEditing from './TodoEditing'
function Todo({ todo }) {
  return (
    <li className={classNames({ completed: todo.isCompleted, editing: todo.isEditing })}>
      <div className="view">
        <TodoTitle todo={todo}>{todo.title}</TodoTitle>
        <TodoDelete id={todo.id}></TodoDelete>
        <TodoCompleted todo={todo}></TodoCompleted>
      </div>
      <TodoEditing todo={todo}></TodoEditing>
    </li>
  )
}

export default observer(Todo)
