import React from 'react'

// 6- Carregamento de dados
import { useFetch } from '../hooks/useFetch'

const url = "http://localhost:3000/products"

// 7 - Rota dinamica
import { Link } from 'react-router-dom'
const Home = () => {
  const {data: items} = useFetch(url)

  return (
    <div>
        <h1>Home</h1>
        <p>Conteúdo da pag</p>
        {/* 6- Carregamento de dados*/}
        <ul>
          {items && items.map((produtos)=>(
            <li key={produtos.id}>
              <h2>{produtos.name}</h2>
              <p>R${produtos.price}</p>
              {/*7- Rota dinamica*/}
              <Link to={`/products/${produtos.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Home