import React from 'react'
import stylesModule from "./Title.module.css"

const Title = () => {
  return (
    <div>
        <h2 className={stylesModule.title}>Essa estilização esta sendo feita por <span>Modulo</span></h2>
    </div>
  )
}

export default Title