import { useCart } from '../context/CartContext'

export default function Home() {
    // Obtenemos los productos y la función para añadir desde nuestro contexto
    const { products, addToCart } = useCart()

    return (
        <main className="container my-5">
            <header className="text-center mb-5">
                <h1 className="display-5 fw-bold text-dark">Catálogo Tecnológico</h1>
                <p className="lead text-muted">
                    Haz clic en "Agregar al Carrito" y observa cómo se sincroniza el Navbar en tiempo real.
                </p>
            </header>

            {/* Grid responsivo de Bootstrap: 1 columna en móvil, 2 en tablets, 4 en desktop */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {products.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100 shadow-sm border-0 transition-hover">
                            <img
                                src={product.image}
                                className="card-img-top object-fit-cover"
                                alt={product.name}
                                style={{ height: '200px' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-semibold">{product.name}</h5>
                                <p className="card-text text-muted small flex-grow-1">
                                    {product.description}
                                </p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className="fs-5 fw-bold text-primary">
                                        ${product.price}
                                    </span>
                                    {/* Este botón ejecuta la acción en la Bodega Central */}
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="btn btn-outline-primary btn-sm px-3"
                                    >
                                        + Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}