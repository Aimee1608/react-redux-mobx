import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../store/RootStore'
function Header() {
  const [title, setTitle] = useState('')
  const { todoStore } = useRootStore()
  const { addTodo } = todoStore
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyUp={e => {
          if (e.key !== 'Enter') return
          addTodo(title)
          setTitle('')
        }}
      />
    </header>
  )
}
// export default observer(Header)
export default Header
