import { useState } from 'react'

const Data = () => {

    let somaData = 10

    const [anotherNumber, setAnotherNumber] = useState(15)
  return (
    <div>
        <div>
            {/*Tentamos mudar o valor da variavel sem o useState e nao deu certo*/}
            <p>O valor da soma é {somaData}</p>
            <button onClick={() => (somaData = 15)}>Alterar valor</button>
        </div>
        

        <div>
            {/*Tentamos mudar o valor da variavel sem o useState e deu certo*/}
            <p>valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}>Mudar valor do State</button>
        </div>
    </div>
  )
}

export default Data