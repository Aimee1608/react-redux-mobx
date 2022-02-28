export default ({ dispatch }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch)
    }
    next(action)
  }
