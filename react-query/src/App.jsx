import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TododList from './components/TodoList'

function App() {

  return (
    <div className='app-container'>
      <header>
        <h1>React Query Todos</h1>
        <p>A simple todo app powered by vite and react query</p>

      </header>
      <main>
        <AddTodoForm/>
        <TododList/>
      </main>

    </div>
  )
}

export default App
