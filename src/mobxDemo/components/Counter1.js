import { observer } from 'mobx-react-lite'
function Counter({ counterStore }) {
  console.log('counterStore', counterStore.count)
  // const { count, increment, decrement } = counterStore
  return (
    <div>
      <button onClick={counterStore.increment}>increment</button>
      <span>{counterStore.count}</span>
      <button onClick={counterStore.decrement}>decrement</button>
    </div>
  )
}

export default observer(Counter)
// export default Counter
