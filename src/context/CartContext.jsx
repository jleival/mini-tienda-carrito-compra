import { createContext, useState, useContext } from 'react'

// 1. CREACIÓN DEL CONTEXTO (La Bodega vacía)
export const CartContext = createContext()

// Datos iniciales de prueba (Catálogo de productos de la vida real)
const INITIAL_PRODUCTS = [
    {
        id: 1,
        name: 'Teclado Mecánico RGB',
        price: 75,
        description: 'Switches táctiles silenciosos con iluminación personalizable.',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80'
    },
    {
        id: 2,
        name: 'Mouse Inalámbrico Pro',
        price: 45,
        description: 'Sensor óptico de alta precisión con batería de larga duración.',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80'
    },
    {
        id: 3,
        name: 'Audífonos Noise Cancelling',
        price: 120,
        description: 'Cancelación activa de ruido con sonido envolvente Hi-Fi.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'
    },
    {
        id: 4,
        name: 'Monitor Gamer 27" 144Hz',
        price: 260,
        description: 'Panel IPS con tasa de refresco ultra fluida de 1ms.',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80'
    }
]

// 2. EL PROVEEDOR (El componente que administrará y repartirá los datos)
export function CartProvider({ children }) {
    // Estado 1: Catálogo de productos disponibles
    const [products] = useState(INITIAL_PRODUCTS)

    // Estado 2: Elementos dentro del carrito
    // Estructura de cada item: { ...producto, quantity: 1 }
    const [cart, setCart] = useState([])

    console.log('📦 [CartContext] Estado actual del carrito:', cart)

    // FUNCIÓN 1: Agregar producto al carrito
    const addToCart = (productToAdd) => {
        console.group(`🛒 [CartContext] Acción: addToCart -> "${productToAdd.name}"`)
        console.log('Producto recibido para agregar:', productToAdd)

        setCart((prevCart) => {
            // Verificamos si el producto ya existe en el carrito
            const existingProductIndex = prevCart.findIndex(item => item.id === productToAdd.id)

            if (existingProductIndex >= 0) {
                // Caso A: Ya existía -> Aumentamos su cantidad en 1
                console.log(`ℹ️ El producto con ID ${productToAdd.id} ya estaba en el carrito. Incrementando cantidad...`)
                const updatedCart = [...prevCart]
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    quantity: updatedCart[existingProductIndex].quantity + 1
                }
                console.table(updatedCart)
                console.groupEnd()
                return updatedCart
            } else {
                // Caso B: Es un producto nuevo -> Lo añadimos con quantity: 1
                console.log(`✨ El producto con ID ${productToAdd.id} es nuevo. Agregando al carrito con quantity: 1...`)
                const updatedCart = [...prevCart, { ...productToAdd, quantity: 1 }]
                console.table(updatedCart)
                console.groupEnd()
                return updatedCart
            }
        })
    }

    // FUNCIÓN 2: Quitar una unidad o eliminar el producto si llega a 0
    const removeFromCart = (productId) => {
        console.group(`🗑️ [CartContext] Acción: removeFromCart -> ID: ${productId}`)

        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === productId)

            if (!existingProduct) {
                console.warn('⚠️ Producto no encontrado en el carrito.')
                console.groupEnd()
                return prevCart
            }

            if (existingProduct.quantity > 1) {
                // Si hay más de 1 unidad, solo reducimos la cantidad
                console.log(`ℹ️ Reduciendo cantidad de ID: ${productId} a ${existingProduct.quantity - 1}`)
                const updatedCart = prevCart.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                console.table(updatedCart)
                console.groupEnd()
                return updatedCart
            } else {
                // Si solo quedaba 1 unidad, lo filtramos del arreglo
                console.log(`❌ Cantidad llegó a 0. Eliminando producto completamente del carrito.`)
                const updatedCart = prevCart.filter(item => item.id !== productId)
                console.table(updatedCart)
                console.groupEnd()
                return updatedCart
            }
        })
    }

    // FUNCIÓN 3: Vaciar el carrito por completo
    const clearCart = () => {
        console.log('🧹 [CartContext] Carrito vaciado por completo.')
        setCart([])
    }

    // CÁLCULOS DERIVADOS: Totales calculados en tiempo real
    // Cantidad total de artículos (sumando las cantidades individuales)
    const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0)

    // Monto total a pagar en dólares
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    // El objeto 'value' contiene TODO lo que los componentes podrán usar
    const contextValue = {
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItemsCount,
        totalPrice
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

// 3. HOOK PERSONALIZADO: Forma profesional y cómoda de consumir el contexto
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de un <CartProvider>')
    }
    return context
}