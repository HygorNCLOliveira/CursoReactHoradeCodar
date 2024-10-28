// - useStates e hooks
import { useState, useEffect } from 'react'
import { useFetch } from "./hooks/useFetch";

// - estilizaçoes
import './App.css'
import './components/Form.css'

// - Componentes


const urlAPI = "http://localhost:3000/products"

function App() {
  // 1- Resgatando dados
  const [produtos, setProdutos] = useState([]);

//  useEffect(() => {
//    async function getData(){
//
//      const resposta = await fetch(urlAPI)
//
//      const data = await resposta.json()
//      
//      setProdutos(data)
//    }
//    getData();
//  }, []);

  // 4 - Custom hook
  const {data: itens, httpConfig, loading, error } = useFetch(urlAPI)

  // 2- envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = {
      name,
      price,
    }
//
//    const res = await fetch(urlAPI, {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify(produto)
//    });
//
//    // 3- Carregamento dinamico
//    const addedProduct = await res.json()
//
//    setProdutos((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - Refatorando
    httpConfig(produto, "POST")


    setName("")
    setPrice("")
  }

  return (
    <div className='App'>
      <h1>Requisições HTTP com React</h1>

      <div className="exercicios">
        {/*6-  Loading*/}
        {/*1- Resgate de dados*/}
        
        <h2>Requisição de dados</h2>
        {loading && <p>Carregando...</p>}
        {/*7 - Tratando erro*/}
        {error && <p>{error}</p>}
        <ul>
          {itens && itens.map((produtos)=>(
            <li key={produtos.id}> {produtos.name} - R${produtos.price}</li>
          ))}
        </ul>
      </div>

      <div className="exercicios">
        {/*2- Envio de dados*/}
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="name">Nome do produto:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="name">Preço:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            {/*7 - Loading post*/}
            {loading && <button type="submit" disabled value="Aguarde">Aguarde...</button>}
            {!loading && <button type="submit" value="Aguarde">Enviar</button>}
            {/*<button type="submit"> Adicionar produto</button>*/}
        </form>
      </div>



    </div>
  )
}

export default App
