import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../store/RootStore'
function ClearCompleted() {
  const { todoStore } = useRootStore()
  const { clearCompleted } = todoStore
  return (
    <button className="clear-completed" onClick={clearCompleted}>
      clear completed
    </button>
  )
}
export default observer(ClearCompleted)
