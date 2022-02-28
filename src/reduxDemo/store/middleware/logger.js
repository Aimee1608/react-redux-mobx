export default store => next => action => {
  console.log(store)
  console.log(action)
  console.log('logger')
  next(action)
}
