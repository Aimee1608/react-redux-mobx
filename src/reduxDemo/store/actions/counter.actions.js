import { INCREMENT, DECREMENT, INCREMENT_ASYNC_SAGA } from '../const/counter.const'
export const increment = payload => {
  return { type: INCREMENT, payload }
}
export const decrement = payload => {
  return { type: DECREMENT, payload }
}

export const increment_async = payload => dispatch => {
  setTimeout(() => {
    dispatch(increment(payload))
  }, 2000)
}

export const increment_async_saga = payload => ({ type: INCREMENT_ASYNC_SAGA, payload })
