import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../store/RootStore'
function TodoFilter() {
  const { todoStore } = useRootStore()
  const { filterCondition, modifyFilterCondition } = todoStore
  return (
    <ul className="filters">
      <li>
        <button onClick={() => modifyFilterCondition('All')} className={classNames({ selected: filterCondition === 'All' })}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => modifyFilterCondition('Active')} className={classNames({ selected: filterCondition === 'Active' })}>
          Active
        </button>
      </li>
      <li>
        <button onClick={() => modifyFilterCondition('Completed')} className={classNames({ selected: filterCondition === 'Completed' })}>
          Completed
        </button>
      </li>
    </ul>
  )
}
export default observer(TodoFilter)
