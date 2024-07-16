import { Navigate, Route, Routes } from "react-router-dom" // Importamos componentes para el enrutamiento.
import { NavBar } from "./components/NavBar" 
import { ComprasPage } from "./pages/ComprasPage" 
import { CarritoPage } from "./pages/CarritoPage" 
import { ProductosProvider } from "./context/ProductosProvider" // Importamos el proveedor del contexto de productos.
import { CarritoProvider } from "./context/CarritoProvider" // Importamos el proveedor del contexto del carrito.

export const CarritoApp = () => {
    return (
        // Proveedor del contexto de productos envuelve toda la aplicación.
        <ProductosProvider>
            {/* Proveedor del contexto del carrito envuelve toda la aplicación */}
            <CarritoProvider>
                
                <NavBar />
                <div className="container">
                    {/* Definimos las rutas de la aplicación */}
                    <Routes>
                        {/* Ruta para la página de compras */}
                        <Route path="/" element={<ComprasPage />} />
                        {/* Ruta para la página del carrito */}
                        <Route path="/carrito" element={<CarritoPage />} />
                        {/* Ruta por defecto que redirige a la página de compras */}
                        <Route path="/*" element={<Navigate to='/' />} />
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
