import TodoHeader from './Header'
import TodoMain from './Main'
import TodoFooter from './Footer'
import './index.less'
export default function Container() {
  return (
    <div className="section">
      <TodoHeader></TodoHeader>
      <TodoMain></TodoMain>
      <TodoFooter></TodoFooter>
    </div>
  )
}
