import { observer } from 'mobx-react-lite'
import { useRootStore } from './../store/RootStore'

function Counter() {
  const { counterStore } = useRootStore()
  console.log('counterStore', counterStore.count)
  // const { count, increment, decrement } = counterStore
  return (
    <div>
      <h3>使用RootStore context 来使用</h3>
      <button onClick={counterStore.increment}>increment</button>
      <span>{counterStore.count}</span>
      <button onClick={counterStore.decrement}>decrement</button>
    </div>
  )
}

export default observer(Counter)
// export default Counter
