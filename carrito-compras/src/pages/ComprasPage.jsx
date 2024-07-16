import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {

    // Obtener la lista de productos del contexto de productos
    const productos = useContext(ProductosContext);

    // Obtener las funciones de agregar y eliminar productos del contexto del carrito
    const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

    // Función para manejar la acción de agregar un producto al carrito
    const handleAgregar = (producto) => {
        agregarCompra(producto);
    };

     // const handleAumentar = (id) => {};
    // const handleDisminuir = (id) => {};

    // Función para manejar la acción de eliminar un producto del carrito
    const handleEliminar = (id) => {
        eliminarCompra(id);
    };

    return (
        <>
            <h1>Compras: </h1>
            <hr />

            {/* Mapear los productos y renderizar cada uno como un componente Card */}
            {
                productos.map(producto => (
                    <Card
                        key={producto.id}
                        imagen={producto.image}
                        titulo={producto.title}
                        descripcion={producto.description}
                        precio={producto.price}
                        handleAgregar={() => handleAgregar(producto)} // Proporcionar la función handleAgregar al componente Card
                        handleEliminar={() => handleEliminar(producto.id)} // Proporcionar la función handleEliminar al componente Card
                    >
                    </Card>
                ))
            }

        </>
    )
}
