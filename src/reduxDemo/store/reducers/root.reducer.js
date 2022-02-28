import { combineReducers } from 'redux'
import CounterReducer from './counter.reducer'
import ModalReducer from './modal.reducer'
import newCounterReducer from './newCounter.reducer'
export default combineReducers({
  counter: CounterReducer,
  modal: ModalReducer,
  newCounter: newCounterReducer
})
