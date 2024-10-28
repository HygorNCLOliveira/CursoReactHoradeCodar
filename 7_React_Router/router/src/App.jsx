import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'


// 5- Link entre paginas
import Navbar from './components/Navbar'
// 10- Search
import SearchForm from './components/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <SearchForm />
      <Outlet />
      
      <p>Footer</p>
    </div>
  )
}

export default App
