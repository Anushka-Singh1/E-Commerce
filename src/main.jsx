import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Context/ProductContext.jsx'
import {FilterContextProvider} from './Context/FilterContext.jsx'
import { CartProvider } from './Context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <AppProvider>
  <FilterContextProvider>
  <CartProvider>
    <App />
  </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </BrowserRouter>,

)
