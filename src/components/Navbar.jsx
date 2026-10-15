import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
    // Consumimos directamente los totales calculados desde la Bodega Central
    const { totalItemsCount, totalPrice } = useCart()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
            <div className="container">
                {/* Marca / Logo que redirige a la raíz */}
                <Link className="navbar-brand fw-bold text-uppercase tracking-wider" to="/">
                    🛒 TechStore
                </Link>

                {/* Enlaces de navegación */}
                <div className="d-flex align-items-center gap-3">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link text-white fw-bold active" : "nav-link text-white-50"
                        }
                    >
                        Catálogo
                    </NavLink>

                    {/* Botón hacia el Carrito con Badge reactivo */}
                    <Link to="/carrito" className="btn btn-outline-light position-relative">
                        Carrito
                        {/* Si hay productos, mostramos el monto actual */}
                        {totalItemsCount > 0 && (
                            <span className="ms-2 badge bg-success">
                                ${totalPrice.toLocaleString()}
                            </span>
                        )}

                        {/* Burbuja flotante con la cantidad total de artículos */}
                        {totalItemsCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {totalItemsCount}
                                <span className="visually-hidden">artículos en carrito</span>
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    )
}