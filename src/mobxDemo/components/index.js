import Counter1 from './Counter1'
import Counter from './Counter'
import CounterStore from './../store/CounterStore'
import { RootStoreProvider } from '../store/RootStore'
import Container from './Todos/Container'
const counterStore = new CounterStore()

export default function Demo() {
  return (
    <>
      <Counter1 counterStore={counterStore}></Counter1>
      <RootStoreProvider>
        <Counter></Counter>
        <Container></Container>
      </RootStoreProvider>
    </>
  )
}
