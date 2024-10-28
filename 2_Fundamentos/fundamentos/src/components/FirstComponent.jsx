import MyComponent from "./MyComponent"

const FirstComponent = () => {
    return(
        <>
            <div>
                <h3>Meu primeiro componente</h3>
                <ul>
                    <li>Criar</li>
                    <li>Exportar</li>
                    <li>Importar</li>
                    <li><MyComponent/></li>
                </ul>
            </div>
        </>
    )
}

export default FirstComponent