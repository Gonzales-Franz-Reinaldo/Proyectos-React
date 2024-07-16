import { useState } from "react";
import '../styles/card.css';
import { PropTypes } from 'prop-types';

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleEliminar }) => {

    const [added, setAdded] = useState(false);

    const agregarAlCarrito = () => {
        handleAgregar();
        setAdded(true);
    }

    const quitarDelCarrito = () => {
        handleEliminar();
        setAdded(false);
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


Card.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    handleAgregar: PropTypes.func.isRequired,
    handleEliminar: PropTypes.func.isRequired
}
