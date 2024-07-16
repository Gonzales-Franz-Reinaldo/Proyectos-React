import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {

    const productos = useContext(ProductosContext);

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

    const handleAgregar = (producto) => {
        agregarCompra(producto);
    };

    // const handleAumentar = (id) => {};
    // const handleDisminuir = (id) => {};

    const handleEliminar = (id) => {
        eliminarCompra(id);
    };

    return (
        <>
            <h1>Compras: </h1>
            <hr />

            {
                productos.map(producto => (
                    <Card
                        key={producto.id}
                        imagen={producto.image}
                        titulo={producto.title}
                        descripcion={producto.description}
                        precio={producto.price}
                        handleAgregar={() => handleAgregar(producto)}
                        handleEliminar={() => handleEliminar(producto.id)}
                    >
                    </Card>
                ))
            }

        </>
    )
}