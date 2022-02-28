import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from './../actions/newCounter.actions'
export default createReducer(
  {
    [increment]: (state, action) => ({ count: state.count + action.payload }),
    [decrement]: (state, action) => ({ count: state.count - action.payload })
  },
  { count: 0 }
)
