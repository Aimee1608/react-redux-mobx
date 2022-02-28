import { SHOWMODAL, HIDEMODAL, SHOWMODAL_ASYNC_SAGA } from './../const/modal.const'
export const show = () => ({ type: SHOWMODAL })
export const hide = () => ({ type: HIDEMODAL })
export const show_async = () => dispatch => {
  setTimeout(() => {
    dispatch(show())
  }, 2000)
}
export const show_async_saga = () => ({ type: SHOWMODAL_ASYNC_SAGA })
