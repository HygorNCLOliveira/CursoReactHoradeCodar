import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams();
    const {Info} = useParams();


    if(!Info){
        return (
            <div>

                <h3>Descrição do produto: {id}</h3>
                <p>Produto não tem descrição!</p>
            </div>
        )
    }

  return (
    <div>
        <h3>Descrição do produto: {id}</h3>
        <p>{Info}</p>
    </div>
  )
}

export default Info