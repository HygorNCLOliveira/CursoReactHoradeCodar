import { useState } from 'react'
import './App.css'

// 1- Criando Form
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Form em react</h1>

      <div className="exercicios">
        {/* 1- Formulário*/}
        <MyForm userName="Hygor Oliveira" userEmail="Hygor@Melhor.dev.br"/>
      </div>


    </div>
  )
}

export default App
