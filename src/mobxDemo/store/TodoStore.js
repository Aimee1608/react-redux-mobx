import { action, makeObservable, observable, flow, computed } from 'mobx'
import Todo from './Todo'
import axios from 'axios'
export default class TodoStore {
  constructor() {
    this.todos = []
    this.filterCondition = 'All'
    makeObservable(this, {
      todos: observable,
      addTodo: action.bound,
      loadTodos: flow,
      removeTodo: action.bound,
      unCompletedTodoCount: computed,
      filterCondition: observable,
      modifyFilterCondition: action.bound,
      filterTodos: computed,
      clearCompleted: action.bound
    })
    this.loadTodos()
  }
  *loadTodos() {
    let response = yield axios.get('http://localhost:3001/todos')
    response.data.forEach(todo => this.todos.push(new Todo(todo)))
  }
  addTodo(title) {
    this.todos.push(new Todo({ title, id: this.generateTodoId() }))
  }
  generateTodoId() {
    if (!this.todos.length) return 1
    return this.todos.reduce((id, todo) => (id < todo.id ? todo.id : id), 0) + 1
  }
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
  get unCompletedTodoCount() {
    return this.todos.filter(todo => !todo.isCompleted).length
  }
  modifyFilterCondition(filterCondition) {
    this.filterCondition = filterCondition
  }
  get filterTodos() {
    switch (this.filterCondition) {
      case 'Active':
        return this.todos.filter(todo => !todo.isCompleted)
      case 'Completed':
        return this.todos.filter(todo => todo.isCompleted)
      default:
        return this.todos
    }
  }
  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.isCompleted)
  }
}
