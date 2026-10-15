# 🛒 TechStore - Mini Tienda Online con React, Context API y Bootstrap

Aplicación web de comercio electrónico desarrollada con **React** y **Vite**, diseñada para demostrar el manejo de estado global avanzado mediante **React Context API**, enrutamiento dinámico con **React Router** y diseño responsivo con **Bootstrap**.

---

## ✨ Características Principales

* **Catálogo de Productos Dinámico**: Visualización de productos tecnológicos con imágenes, descripciones y precios.
* **Estado Global con Context API**: Gestión centralizada del carrito de compras y productos a través de un proveedor (`CartProvider`) y un hook personalizado (`useCart`).
* **Navegación Fluida (React Router)**: Cambio de vistas entre el Catálogo (`/`) y el Carrito de Compras (`/carrito`) sin recargar la página.
* **Contador Reactivo en Navbar**: Actualización en tiempo real del monto total y la cantidad de artículos flotantes en el menú de navegación.
* **Control de Cantidades y Totales**: Opciones para incrementar, disminuir, eliminar productos o vaciar el carrito por completo con cálculos automáticos de subtotal y total.
* **Trazabilidad con Consola**: Mensajes detallados y agrupados mediante `console.log` y `console.table` para rastrear cada acción del usuario en el estado global.

---

## 🛠️ Tecnologías y Librerías Utilizadas

* **React 18** (con Hooks: `useState`, `useContext`, `createContext`)
* **Vite** (Entorno de desarrollo rápido)
* **React Router DOM** (Gestión de rutas y navegación SPA)
* **Bootstrap 5** (Estilos, componentes y grillas responsivas)
* **JavaScript (ES6+)**

---

## 📂 Estructura del Proyecto

```text
src/
├── assets/             # Recursos estáticos (logos, imágenes)
├── components/         # Piezas reutilizables de interfaz
│   └── Navbar.jsx      # Barra de navegación con contadores del carrito
├── context/            # Lógica y datos globales
│   └── CartContext.jsx # Bodega central (Provider, estado y funciones del carrito)
├── views/              # Vistas completas conectadas a rutas
│   ├── Home.jsx        # Vista principal del catálogo
│   └── Cart.jsx        # Vista del resumen de compra y carrito
├── App.jsx             # Configuración principal de Rutas y Proveedor
├── main.jsx            # Punto de entrada y carga de Bootstrap
└── index.css           # Estilos globales personalizados
```

---

## 🚀 Guía de Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio** o descargar los archivos del proyecto.

2. **Instalar las dependencias** desde la terminal en la carpeta del proyecto:
   ```bash
   npm install
   ```

3. **Instalar librerías requeridas** (React Router y Bootstrap):
   ```bash
   npm install react-router-dom bootstrap
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. Abre tu navegador e ingresa a la URL local generada (generalmente `http://localhost:5173`).