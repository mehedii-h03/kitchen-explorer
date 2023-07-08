import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main.jsx'
import Home from './components/Home'
import Login from './components/Authentication/Login'
import Registration from './components/Authentication/Registration'
import AuthProvider from './components/Authentication/AuthProvider'
import ErrorPage from './components/ErrorPage'
import ChefRecipe from './components/ChefRecipe'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import Blog from './components/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: (() => fetch('https://kitchen-explorer-server-mehedii-h03.vercel.app/chefs'))
      },
      {
        path: 'recipes/:id',
        element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
        loader: (({ params }) => fetch(`https://kitchen-explorer-server-mehedii-h03.vercel.app/recipes/${params.id}`))
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)
