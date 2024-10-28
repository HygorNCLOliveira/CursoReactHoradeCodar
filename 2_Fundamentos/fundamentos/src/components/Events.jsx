import React from 'react'

const Events = () => {

    const handleClick = () => {
        console.log("Função ativada pelo click")
    };

    const renderizando = (x) => {
        if (x){
            return <h1>If Rederizado</h1>
        } else {
            return <h1>Else Renderizado</h1>
        }
    }
    
    
    //return 10 > 3 && <p>Carregando...</p>
    
  return (
    <div>
        <div>
            <button onClick={()=>{console.log("Testando um evento")}}>Clique aqui</button>
        </div>
        {/*7- Evento com função*/}
        <div>
            <button onClick={handleClick}> Clique aqui para ativar a função</button>
        </div>
        {/*8 - renderizando funcoes*/}
        {renderizando(true)}
        {renderizando(false)}
    </div>
  )
}

export default Events