import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Componentes

  // 1- Indexando outras paginas
import Contact from './routes/Contact.jsx'

  // 2- Pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'

  // 1- configurando router
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'
  // 3- Componente base
import Home from './routes/Home.jsx'
  // 7- Rota dinamica
import Product from './routes/Product.jsx'
  // 8- nested route
import Info from './routes/info.jsx'
  // 10 - search
import Search from './routes/Search.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    // 3 - Componente base
    children:[
        // 1- indexando outras paginas
      // {
      //   path: "contato",
      //   element: <Contact />
      // },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contato",
        element: <Contact />
      },
    
    // 7- Rota dinamica
      {
        path: "products/:id",
        element: <Product />
      },  

    // 8 - nested route
      {
        path: "products/:id/info",
        element: <Info />
      },
    // 10 - search
      {
        path: "search",
        element: <Search />
      },
      // 11 - Redirect
      {
        path: "teste",
        element: <Navigate to="/"/>
      },
    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
