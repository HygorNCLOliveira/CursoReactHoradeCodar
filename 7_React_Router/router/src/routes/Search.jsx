import { useFetch } from '../hooks/useFetch'

import { Link, useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = "http://localhost:3000/products?" + searchParams;

    const {data: items} = useFetch(url);
  
    return (
    <div>
        <h1> Resultados da pesquisa</h1>
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

export default Search