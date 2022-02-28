import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/root.reducer'
import logger from './middleware/logger'
import test from './middleware/test'
// 自定义thunk
import thunk from './middleware/thunk'
import thunk2 from 'redux-thunk'
import createSagaMidddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'

// 创建 sagaMiddleware
const sagaMiddleware = createSagaMidddleware()

export const store = createStore(reducer, applyMiddleware(logger, test, thunk2, sagaMiddleware))

sagaMiddleware.run(rootSaga)
