import { Badge } from '@mui/material'; // Importamos Badge de Material-UI para mostrar la cantidad de ítems en el carrito.
import { ShoppingCart } from '@mui/icons-material'; // Importamos el icono de carrito de Material-UI.
import { NavLink } from 'react-router-dom'; // Importamos NavLink de react-router-dom para la navegación entre páginas.
import { useContext } from 'react'; 
import { CarritoContext } from '../context/CarritoContext'; // Importamos el contexto CarritoContext para obtener datos del carrito.

export const NavBar = () => {

    // Extraemos listaCompras del contexto CarritoContext.
    const { listaCompras } = useContext(CarritoContext); 

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">Carrito</NavLink> {/* Enlace de marca del navbar */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> {/* Ícono del botón de colapso del navbar */}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" href="#">Compras</NavLink> {/* Enlace activo de navegación hacia Compras */}
                        </li>
                    </ul>
                    <NavLink to='/carrito'>
                        {/* Enlace al carrito con Badge para mostrar el número de productos en el carrito */}
                        <Badge badgeContent={listaCompras.length} color='secondary'>
                            <ShoppingCart color="action" /> {/* Icono de carrito de compras con efecto de acción */}
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
