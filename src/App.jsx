import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-4xl font-bold text-white bg-indigo-700 p-4 rounded-lg shadow-lg">
  Redux Toolkit
</h1>


     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
