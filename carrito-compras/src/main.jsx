import React from 'react'
import ReactDOM from 'react-dom/client' // Importamos ReactDOM para renderizar la aplicación en el DOM.
import { CarritoApp } from './CarritoApp' 
import { BrowserRouter } from 'react-router-dom' // Importamos BrowserRouter para habilitar el enrutamiento.

ReactDOM.createRoot(document.getElementById('root')).render(
  // BrowserRouter habilita el enrutamiento en la aplicación.
  <BrowserRouter>
    {/* React.StrictMode es una herramienta para resaltar problemas potenciales en la aplicación. */}
    <React.StrictMode>
      {/* CarritoApp es el componente principal que se renderiza en la aplicación. */}
      <CarritoApp />
    </React.StrictMode>
  </BrowserRouter>,
)
