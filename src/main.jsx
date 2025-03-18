import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router'
import Product from '../componenets/Product.jsx'
import Cart from "../componenets/Cart.jsx"
import Dashboard from "../componenets/Dashboard.jsx"
import RootLayout from '../componenets/RootLayout.jsx'

const router = createBrowserRouter([

  {
    path : '/',
    element : <RootLayout/>,
    children: [
      {
        path : '/cart',
        element : <Cart/>
      },
      {
        path : '/',
        element : <Dashboard/>
      }
     
    ]

  },
 
 ])


createRoot(document.getElementById('root')).render(
  

    <RouterProvider router={router} />
  
   

)
