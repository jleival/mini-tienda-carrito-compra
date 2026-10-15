import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Cart from './views/Cart'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* El Navbar vive dentro de BrowserRouter para poder usar <Link>, */}
        {/* y dentro de CartProvider para poder leer el estado del carrito. */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App