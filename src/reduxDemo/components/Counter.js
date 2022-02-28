import { Provider } from 'react-redux'
import { store as CounterStore } from './../store/CounterStore'
import { store } from './../store'
import CounterChild from './CounterChild'
import CounterChild2 from './CounterChild2'
import CounterChildActions from './CounterChildActions'
import Modal from './Modal'
function Counter() {
  return (
    <div>
      <Provider store={CounterStore}>
        <CounterChild></CounterChild>
      </Provider>
      <h3>组合的store</h3>
      <Provider store={store}>
        <h4>计数</h4>
        <CounterChild2></CounterChild2>
        <h4>显示 隐藏</h4>
        <Modal></Modal>
        <h4>redux-actions</h4>
        <CounterChildActions></CounterChildActions>
      </Provider>
    </div>
  )
}

export default Counter
