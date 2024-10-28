import React from 'react'

const CondicionalRender = () => {
    const x = false
    const nome = "Joso"
  return (
    <div>
        {/*7- Renderização condicional*/}
        <div>
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true sim!</p>}
            {x == false && <p>X é falso</p>}
        </div>

        <div>
            {/*8- Else*/}
            <h2>Renderizando um else </h2>
            {nome === "Jose" ? (
                <div>
                    <p>Olá bem vindo Jose</p>
                </div>
            ):(
                <div>
                    <p>Você não é o José</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default CondicionalRender