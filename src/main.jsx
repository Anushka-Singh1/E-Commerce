import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Context/ProductContext.jsx'
import {FilterContextProvider} from './Context/FilterContext.jsx'
import { CartProvider } from './Context/cartContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Auth0Provider
    domain="dev-l7e7kuqtcf5xqzyw.us.auth0.com"
    clientId="NH8qgvakJF9nRtViUeAm8gZYqFU820B3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
  <FilterContextProvider>
  <CartProvider>
    <App />
  </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
  </BrowserRouter>,

)
