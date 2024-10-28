// 7- Rota dinâmica
// import { useParams } from "react-router-dom"
// import { useFetch } from "../hooks/useFetch"


// const Product = () => {
//     const { id } = useParams();

//     const url = "http://localhost:3000/products/" + id;

//     const {data: produtos} = useFetch(url)
//     console.log("teste", produtos )

//     if (!produtos) return <p>Carregando...</p>

//     return (
//         <div>
//             <h1>{produtos.name}</h1>
//             <h2>ID do propduto: {produtos.id}</h2>
//             <p>R${produtos.price}</p>

//         </div>
//   )
// }

// export default Product

// 8- Rota aninhadas
import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


const Product = () => {
    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id;

    const {data: produtos} = useFetch(url)

    if (!produtos) return <p>Carregando...</p>

    return (
        <div>
            <h1>{produtos.name}</h1>
            <h2>ID do propduto: {produtos.id}</h2>
            <p>R${produtos.price}</p>
            <Link to={`/products/${produtos.id}/info`}>Mais informações</Link>

        </div>
  )
}

export default Product