import { useReducer } from 'react';
import { CarritoContext } from './CarritoContext';
import { PropTypes } from 'prop-types';

const initialState = [];

export const CarritoProvider = ({ children }) => {

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case 'Agregar Compra':
                return [...state, action.payload];

            case 'Aumentar Cantidad':
                return state.map(producto => {
                    const cant = producto.cantidad + 1;
                    if (producto.id === action.payload) {
                        return { ...producto, cantidad: cant }
                    } else {
                        return producto;
                    }
                });

            case 'Disminuir Cantidad':
                return state.map(producto => {
                    const cant = producto.cantidad - 1;
                    if (producto.id === action.payload && producto.cantidad > 1) {
                        return { ...producto, cantidad: cant }
                    } else {
                        return producto;
                    }
                })

            case 'Eliminar Compra':
                return state.filter(producto => producto.id !== action.payload);

            default:
                return state;
        }
    }

    // Uso del UseReducer 
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    // Definimos las acciones que se pueden realizar en el carrito de compras
    const agregarCompra = (producto) => {

        producto.cantidad = 1;
        const action = {
            type: 'Agregar Compra',
            payload: producto
        }
        dispatch(action)
    };

    const aumentarCantidad = (id) => {
        const action = {
            type: 'Aumentar Cantidad',
            payload: id
        }
        dispatch(action)
    };

    const disminuirCantidad = (id) => {
        const action = {
            type: 'Disminuir Cantidad',
            payload: id
        }
        dispatch(action)
    };

    const eliminarCompra = (id) => {
        const action = {
            type: 'Eliminar Compra',
            payload: id
        }
        dispatch(action)
    };


    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}

CarritoProvider.propTypes = {
    children: PropTypes.element.isRequired
}
