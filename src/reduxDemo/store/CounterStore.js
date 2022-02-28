import { createStore } from 'redux'

const initialState = { count: 0 }
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const store = createStore(reducer)
