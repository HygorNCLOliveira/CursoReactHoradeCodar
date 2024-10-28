import React from 'react'

const ChangeMessage = ({handleMessage}) => {

    const messages = ["clique no botao 3","clique no botao 1","clique no botao 2"]

  return (
    <div>
        <button onClick={()=>handleMessage (messages[0])}>1</button>
        <button onClick={()=>handleMessage(messages[1])}>2</button>
        <button onClick={()=>handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessage