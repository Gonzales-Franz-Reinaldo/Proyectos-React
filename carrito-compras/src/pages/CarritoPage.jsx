import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
    
    // Acceder al contexto del carrito de compras
    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

    // Función para calcular el total de la compra
    const calcularTotal = () => {
        // let total = 0;
        // listaCompras.map(item => {
        //     total += item.price * item.cantidad;
        // });
        // return total;

        // Utiliza reduce para sumar el precio total de cada producto en el carrito
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
    }

    // Función para manejar la impresión (aún no implementada en este código)
    const handleImpresion = () => {
        print(); // Esta función print() debe ser implementada o importada para su uso
    }

    return (
        <>
            {/* Tabla que muestra los productos en el carrito */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Mapear cada producto en listaCompras para mostrarlo en la tabla
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>
                                    <img src={item.image} alt={item.title} width={50} />
                                </th>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    {/* Botones para aumentar, disminuir cantidad y eliminar productos */}
                                    <button className="btn btn-outline-primary" onClick={() => disminuirCantidad(item.id)}>-</button>
                                    <button className="btn btn-primary">{item.cantidad}</button>
                                    <button className="btn btn-outline-primary" onClick={() => aumentarCantidad(item.id)}>+</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => eliminarCompra(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }

                    {/* Fila para mostrar el total de la compra */}
                    <tr>
                        <th><b>TOTAL: </b></th>
                        <td></td>
                        <td></td>
                        <td><b>${calcularTotal()}</b></td>
                    </tr>
                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={handleImpresion} disabled={listaCompras.length < 1}>Comprar</button>
            </div>
        </>
    )
}
