import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { ProductosContext } from './ProductosContext';

export const ProductosProvider = ({ children }) => {
    
    // Estado local para almacenar la lista de productos
    const [productos, setProductos] = useState([]);

    // Función para obtener los productos desde la API fakestoreapi
    const fetchProductos = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProductos(data); // Actualizar el estado con los productos obtenidos
            console.log(data); // Mostrar los datos en la consola (opcional)
        } catch (error) {
            console.error('Error fetching productos:', error);
        }
    }

    // Efecto de efecto para cargar los productos al montar el componente
    useEffect(() => {
        fetchProductos();
    }, []); // El segundo argumento [] significa que este efecto se ejecuta solo una vez al montar el componente

    // Proveedor que provee el contexto de productos a los componentes hijos
    return (
        <ProductosContext.Provider value={productos}>
            {children} {/* Renderizar los componentes hijos envueltos en el contexto de productos */}
        </ProductosContext.Provider>
    )
}

// PropType para asegurar que los children sean elementos React válidos
ProductosProvider.propTypes = {
    children: PropTypes.element.isRequired
}
