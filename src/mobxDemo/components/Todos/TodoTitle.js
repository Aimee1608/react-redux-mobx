import { observer } from 'mobx-react-lite'
function TodoTitle({ todo }) {
  const { title, modifyTodoIsEditing } = todo
  return <label onDoubleClick={modifyTodoIsEditing}>{title}</label>
}
export default TodoTitle
