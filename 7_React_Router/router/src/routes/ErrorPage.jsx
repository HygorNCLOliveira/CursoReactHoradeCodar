import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();

    console.log(error)

  return (
    <div>
        <h1>Ooops!</h1>
        <p>Pagina não encontrada!</p>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
    </div>
  )
}

export default ErrorPage