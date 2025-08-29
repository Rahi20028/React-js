import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todo'

function App() {

  return (
   <>
   <h1>learn about redux</h1>
   <AddTodo/>
   <Todos/>
   </>
  )
}

export default App
