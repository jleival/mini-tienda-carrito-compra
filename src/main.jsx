import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Importamos el CSS de Bootstrap instalado desde node_modules
import 'bootstrap/dist/css/bootstrap.min.css'

// 2. Opcional pero recomendado: Importamos el JavaScript de Bootstrap
// (Permite que funcionen componentes interactivos como modales, dropdowns y colapsables)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 3. Estilos globales personalizados (nuestro index.css limpio)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)