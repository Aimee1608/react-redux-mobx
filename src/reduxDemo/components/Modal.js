import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../store/actions/modal.actions'

function Modal({ showStatus, show, hide, show_async, show_async_saga }) {
  const styles = {
    width: 200,
    height: 200,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -100,
    marginTop: -100,
    backgroundColor: 'skyblue',
    display: showStatus ? 'block' : 'none'
  }
  return (
    <div>
      <button onClick={show}>显示</button>
      <button onClick={show_async}>异步显示</button>
      <button onClick={show_async_saga}>异步显示-saga</button>
      <button onClick={hide}>隐藏</button>
      <div style={styles}></div>
    </div>
  )
}

const mapStateToProps = state => ({
  showStatus: state.modal.show
})

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
