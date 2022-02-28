import { useRef, useEffect } from 'react'
function TodoEditing({ todo }) {
  const { title, modifyTodoTitle, isEditing } = todo
  const ref = useRef(null)
  useEffect(() => {
    if (isEditing) ref.current.focus()
  }, [isEditing])
  return <input ref={ref} className="edit" defaultValue={title} onBlur={e => modifyTodoTitle(e.target.value)}></input>
}
export default TodoEditing
