import { useReducer } from 'react';
import { CarritoContext } from './CarritoContext';
import { PropTypes } from 'prop-types';

// Estado inicial del carrito de compras
const initialState = [];

export const CarritoProvider = ({ children }) => {

    // Reducer para manejar las acciones del carrito de compras
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case 'Agregar Compra':
                // Agregar un nuevo producto al carrito
                return [...state, action.payload];

            case 'Aumentar Cantidad':
                // Aumentar la cantidad de un producto en el carrito
                return state.map(producto => {
                    const cant = producto.cantidad + 1;
                    if (producto.id === action.payload) {
                        return { ...producto, cantidad: cant }
                    } else {
                        return producto;
                    }
                });

            case 'Disminuir Cantidad':
                // Disminuir la cantidad de un producto en el carrito
                return state.map(producto => {
                    const cant = producto.cantidad - 1;
                    if (producto.id === action.payload && producto.cantidad > 1) {
                        return { ...producto, cantidad: cant }
                    } else {
                        return producto;
                    }
                });

            case 'Eliminar Compra':
                // Eliminar un producto del carrito
                return state.filter(producto => producto.id !== action.payload);

            default:
                return state;
        }
    }

    // Uso del useReducer para gestionar el estado del carrito
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    // Acciones para manipular el carrito de compras
    const agregarCompra = (producto) => {
        producto.cantidad = 1; // Se inicializa la cantidad en 1 al agregar un producto
        const action = {
            type: 'Agregar Compra',
            payload: producto
        }
        dispatch(action); // Ejecutar la acción de agregar compra
    };

    const aumentarCantidad = (id) => {
        const action = {
            type: 'Aumentar Cantidad',
            payload: id
        }
        dispatch(action); // Ejecutar la acción de aumentar cantidad
    };

    const disminuirCantidad = (id) => {
        const action = {
            type: 'Disminuir Cantidad',
            payload: id
        }
        dispatch(action); // Ejecutar la acción de disminuir cantidad
    };

    const eliminarCompra = (id) => {
        const action = {
            type: 'Eliminar Compra',
            payload: id
        }
        dispatch(action); // Ejecutar la acción de eliminar compra
    };

    // Proveedor que provee el contexto del carrito de compras a los componentes hijos
    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children} {/* Renderizar los componentes hijos envueltos en el contexto */}
        </CarritoContext.Provider>
    )
}

// PropType para asegurar que los children sean elementos React válidos
CarritoProvider.propTypes = {
    children: PropTypes.element.isRequired
}
