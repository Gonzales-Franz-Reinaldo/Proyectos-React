import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

    const calcularTotal = () => {
        // let total = 0;
        // listaCompras.map(item => {
        //     total += item.price * item.cantidad;
        // });
        // return total;
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
    }

    const handleImpresion = () => {
        print();
    }

    return (
        <>
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
                        listaCompras.map(item => (

                            <tr key={item.id}>
                                <th>
                                    <img src={item.image} alt={item.title} width={50} />
                                </th>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <bututon className="btn btn-ouline-primary" onClick={() => disminuirCantidad(item.id)}>-</bututon>
                                    <bututon className="btn btn-primary">{item.cantidad}</bututon>
                                    <bututon className="btn btn-ouline-primary" onClick={() => aumentarCantidad(item.id)}>+</bututon>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => eliminarCompra(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }

                    <th><b>TOTAL: </b></th>
                    <td></td>
                    <td></td>
                    <td><b>${calcularTotal()}</b></td>
                </tbody>
            </table>

            <div className="d-grid ga-2">
                <button className="btn btn-primary" onClick={handleImpresion} disabled={listaCompras.length < 1}>Comprar</button>
            </div>
        </>
    )
}
