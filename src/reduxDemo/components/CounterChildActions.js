import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/newCounter.actions'
function CounterChild({ count, increment, decrement, increment_async, increment_async_saga }) {
  return (
    <div>
      <button onClick={() => increment(5)}>increment</button>
      {/* <button onClick={() => increment_async(5)}>increment_async</button>
      <button onClick={() => increment_async_saga(5)}>increment_async_saga</button> */}
      <span>{count}</span>
      <button onClick={() => decrement(5)}>decrement</button>
    </div>
  )
}
const mapStateToProps = state => ({
  count: state.newCounter.count
})
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(counterActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(CounterChild)
