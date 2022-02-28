import { createContext, useContext } from 'react'
import CounterStore from './CounterStore'
import TodoStore from './TodoStore'
import './reactions'

class RootStore {
  constructor() {
    this.counterStore = new CounterStore()
    this.todoStore = new TodoStore()
  }
}

const rootStore = new RootStore()
const RootStoreContext = createContext()

export const RootStoreProvider = ({ children }) => {
  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
}

export const useRootStore = () => {
  return useContext(RootStoreContext)
}
