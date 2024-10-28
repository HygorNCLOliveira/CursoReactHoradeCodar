import { Children, useState } from 'react'
import './App.css'

// 2 - Imagens em assets
import lua from "./assets/lua.jpg";

// 3- hook useState
import Data from './components/Data';

// 4 - renderização de lista
import ListRender from './components/ListRender';

// 5 - Renderizações
import CondicionalRender from './components/condicionalRender';

// 6- Props
import ShowUserName from './components/ShowUserName';

// 9- Desestruturando props
import CarDetails from './components/CarDetails';

//11- reutilização de componentes em lista com loop
const cars = [
  {id:1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id:2, brand: "Kia", color: "Branco", km: 200.000},
  {id:3, brand: "Renault", color: "Azul", km: 23.000},
]

// 12- Fragments React
import Fragments from './components/fragments';

// 13- Children
import Container from './components/Container';

// 14- funções em prop
import ExecuteFunction from './components/ExecuteFunction';

// 15 - state lift
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';






function App() {

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  function showMessage(){
    console.log("Evento do compoente pai")
  }

  const [count, setCount] = useState(0)

  return (
    <div className='App'>

      <h1>Avançando em React</h1>
      
      <div className="exercicios">
        {/* 1- Imagem em public */}
        <h2>Imagem na pasta public</h2>
        <img src="/rua.jpg" alt="Imagem de uma rua"/>
      </div>

      <div className="exercicios">
        {/*2- Imagem em assets*/}
        <h2>Imagem na pasta Assets</h2>
        <img src={lua} alt="Imagem da lua" width={"600px"}></img>
      </div>

      <div className="exercicios">
        <h2>Usando hook - useState</h2>
        <Data/>
      </div>

      <div className="exercicios">
        <h2>Renderização de lista:</h2>
        <ListRender/>
      </div>
      
      <div className="exercicios">
        <h2>Renderização condicional</h2>
        <CondicionalRender/>
      </div>

      <div className="exercicios">
        <h2>Props</h2>
        <ShowUserName name="Maria"/>
      </div>

      <div className="exercicios">
        <h2>Desestruturando Props</h2>
        <CarDetails brand={"Fiat"} km={120.000} color={"Prata"}/>
      </div>

      <div className="exercicios">
        <h2>Reaproveitando componentes</h2>
        <CarDetails brand={"Fiat"} km={120.000} color={"Prata"}/>
        <CarDetails brand={"Audi"} km={100} color={"Preto"}/>
        <CarDetails brand={"Ferrari"} km={330.000} color={"Vermelha"}/>
      </div>

      <div className="exercicios">
        <h2>Reutilização componentes em lista com loops</h2>
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))}
      </div>

      <div className="exercicios">
        <h2>Fragmentos react</h2>
        <Fragments/>
      </div>

      <div className="exercicios">
        <h2>Trabalhando com children</h2>
        <p>Elemento Pai</p>
        <Container>
        <p>Conteudo do elemento filho</p>
        </Container>
      </div>

      <div className="exercicios">
        <h2>Trabalhando com funções em prop</h2>
        <ExecuteFunction myFunction={showMessage} />
      </div>

      <div className="exercicios">
        <h2>Elevação State/ State Lift</h2>
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage} />
      </div>

    </div>
    
  )
}

export default App
