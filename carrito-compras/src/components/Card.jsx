import { useState } from "react"; 
import '../styles/card.css'; 
import { PropTypes } from 'prop-types'; // Importamos PropTypes para la validación de tipos de las props.

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleEliminar }) => {
    
    // Estado local para rastrear si el producto ha sido agregado al carrito.
    const [added, setAdded] = useState(false); 

    const agregarAlCarrito = () => {
        handleAgregar(); // Llama a la función handleAgregar pasada como prop.
        setAdded(true); // Cambia el estado added a true.
    }

    const quitarDelCarrito = () => {
        handleEliminar(); // Llama a la función handleEliminar pasada como prop.
        setAdded(false); // Cambia el estado added a false.
    }

    return (
        <div className="tarjeta"> 
            <img src={imagen} alt={titulo} className="tarjeta-imagen" /> 
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3> 
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>
                {
                    added ?
                        <button className="boton-quitar" type="button" onClick={quitarDelCarrito}>Quitar del carrito</button>
                        :
                        <button className="boton-agregar" type="button" onClick={agregarAlCarrito}>Agregar al carrito</button>
                }
            </div>
        </div>
    )
}

// Definición de PropTypes para validar las props pasadas al componente
Card.propTypes = {
    imagen: PropTypes.string.isRequired, // La imagen debe ser una cadena y es requerida.
    titulo: PropTypes.string.isRequired, // El título debe ser una cadena y es requerido.
    descripcion: PropTypes.string.isRequired, // La descripción debe ser una cadena y es requerida.
    precio: PropTypes.number.isRequired, // El precio debe ser un número y es requerido.
    handleAgregar: PropTypes.func.isRequired, // handleAgregar debe ser una función y es requerida.
    handleEliminar: PropTypes.func.isRequired // handleEliminar debe ser una función y es requerida.
}
