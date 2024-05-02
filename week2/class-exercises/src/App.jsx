import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function App() {
  const [todo, setTodo] = useState({title: '', userId: 1})
  const [todos, setTodos] = useState([])



  return (
    <>
      <TodoForm todo={todo} setTodo={setTodo} setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
