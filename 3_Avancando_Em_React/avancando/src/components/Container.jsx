import React from 'react'

const Container = ({children}) => {
  return (
    <div>
        <h3>conteúdo do componente pai:</h3>
        {children}
    </div>
  )
}

export default Container