
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UsercontextProvider from './context/UsercontextProvider'

function App() {
  

  return (
    <UsercontextProvider>
    <h1>React with chai </h1>
    <Login/>
    <Profile/>
    </UsercontextProvider>
  )
}

export default App
