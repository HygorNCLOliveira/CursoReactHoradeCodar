import { useState } from 'react'
import './App.css'

// 2- CSS de componente
import MyComponent from './components.jsx/MyComponent'

import Title from './components.jsx/Title'

function App() {
  // 4- Inline Style dinâmico
  const n = 1

  // 5- Classes dinâmicas
  const titleX = false;


  return (
    <div>
      <h1>CSS no React</h1>

      <div className="exercicios">
        {/* 1- CSS Global*/}
        <h2>CSS Global</h2>
        <p>Para esse exercicio estamos alterando somente o CSS do <span>index.css</span></p>
      </div>

      <div className="exercicios">
        {/* 2- CSS de componente */}
        <MyComponent />
      </div>

      <div className="exercicios">
        {/*3- Inline Style*/}
        <h2>Este Elemento</h2>
        <p style={{color: "red"}}>Tem estilos <span style={{color:"#c0c0c0" ,borderBottom: "1px solid #000"}}>inline</span></p>
      </div>

      <div className="exercicios">
        {/*4- Inline Style dinamico*/}
        <h2 style={n > 10 ? {color: "blue"}: {color: "red"}}>Esse elemento tem um CSS inline style Dinâmico</h2>
      </div>

      <div className="exercicios">
        {/*5- Classes dinamicas*/}
        <h2 className={titleX ? 'title-styleX' : "title-styleY"}>Elemento com uma classe dinâmica</h2>
      </div>

      <div className="exercicios">
        {/*6- CSS modules*/}
        <Title/>
      </div>

    </div>
  )
}

export default App
