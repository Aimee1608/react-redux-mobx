import UnCompletedTodoCount from './UnCompletedTodoCount'
import TodoFilter from './TodoFilter'
import ClearCompleted from './ClearCompleted'
function Footer() {
  return (
    <footer className="footer">
      <UnCompletedTodoCount />
      <TodoFilter></TodoFilter>
      <ClearCompleted></ClearCompleted>
    </footer>
  )
}
export default Footer
