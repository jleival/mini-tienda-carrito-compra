import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
    const {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        totalItemsCount
    } = useCart()

    // CASO 1: Si el carrito está vacío, mostramos un estado amigable
    if (cart.length === 0) {
        return (
            <div className="container text-center my-5 py-5">
                <div className="card p-5 border-0 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
                    <div className="display-1 text-muted mb-3">🛒</div>
                    <h2 className="fw-bold mb-3">Tu carrito está vacío</h2>
                    <p className="text-muted mb-4">
                        Aún no has agregado ningún producto. Explora nuestro catálogo y equipa tu setup.
                    </p>
                    <Link to="/" className="btn btn-primary btn-lg">
                        Ir a comprar ahora
                    </Link>
                </div>
            </div>
        )
    }

    // CASO 2: Hay productos en el carrito
    return (
        <div className="container my-5">
            <h2 className="fw-bold mb-4">Resumen de tu Compra</h2>

            <div className="row g-4">
                {/* Columna Izquierda: Tabla interactiva con los productos */}
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th className="text-center">Cantidad</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            {/* Miniatura y Nombre */}
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="rounded me-3 object-fit-cover"
                                                        style={{ width: '50px', height: '50px' }}
                                                    />
                                                    <div>
                                                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                                                        <small className="text-muted">ID: #{item.id}</small>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Precio Unitario */}
                                            <td>${item.price}</td>

                                            {/* Botones de acción: decrementar / incrementar */}
                                            <td className="text-center">
                                                <div className="btn-group btn-group-sm" role="group">
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="btn btn-outline-secondary px-2"
                                                        title="Quitar uno"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="btn btn-light px-3 fw-bold disabled">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => addToCart(item)}
                                                        className="btn btn-outline-secondary px-2"
                                                        title="Agregar otro"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>

                                            {/* Subtotal del item */}
                                            <td className="fw-bold text-primary">
                                                ${item.price * item.quantity}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Botón para vaciar carrito */}
                        <div className="card-footer bg-white border-0 text-end py-3">
                            <button
                                onClick={clearCart}
                                className="btn btn-outline-danger btn-sm"
                            >
                                Vaciar Carrito Completo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Tarjeta de Pago y Total */}
                <div className="col-lg-4">
                    <div className="card shadow-sm border-0 p-4">
                        <h4 className="fw-bold mb-3">Total del Pedido</h4>

                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Total de unidades:</span>
                            <span className="fw-bold">{totalItemsCount}</span>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Envío estándar:</span>
                            <span className="text-success fw-bold">Gratis</span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="fs-5 fw-bold">Total a pagar:</span>
                            <span className="fs-3 fw-bold text-primary">${totalPrice.toLocaleString()}</span>
                        </div>

                        <button
                            className="btn btn-success btn-lg w-100 shadow-sm"
                            onClick={() => alert(`¡Gracias por tu compra por un total de $${totalPrice}! 🎉`)}
                        >
                            Proceder al Pago
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}