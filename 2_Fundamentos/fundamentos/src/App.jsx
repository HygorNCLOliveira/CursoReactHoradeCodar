import { useState } from 'react'
import './App.css'
// 2 - Importando componente
import FirstComponent from './components/FirstComponent'

// 4 - Template expression
import TemplateExpression from './components/templateExpression'

// 5 - Hierarquia components
import MyComponent from './components/MyComponent'

// 6 - Eventos
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)
  // 3 - inserindo comentarios
  return (
    <div className='App'>
      {/*comentarios dentro do componente*/}
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>

  )
}

export default App
