import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/global.scss"
import { ProviderComponent } from "../src/contextApi/context.jsx";
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderComponent>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </React.StrictMode>
  </ProviderComponent>

)
