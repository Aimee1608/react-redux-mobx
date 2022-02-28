import { useRootStore } from './../../store/RootStore'
import { observer } from 'mobx-react-lite'

function TodoDelete({ id }) {
  const { todoStore } = useRootStore()
  const { removeTodo } = todoStore
  return <button className="destroy" onClick={() => removeTodo(id)} />
}
export default observer(TodoDelete)
