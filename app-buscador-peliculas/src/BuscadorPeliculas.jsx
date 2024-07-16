import { useState } from "react";

export const BuscadorPeliculas = () => {

    const [busqueda, setBusqueda] = useState('');
    const [peliculas, setPeliculas] = useState([]);

    const url = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = 'acf5472e45e436d5026bfd4c5e792981';

    const onInputChange = (event) => {
        setBusqueda(event.target.value);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        fetchPelicula();
    }

    const fetchPelicula = async () => {
        try{
            const response = await fetch(`${url}?query=${busqueda}&api_key=${API_KEY}`);
            const data = await response.json();
            setPeliculas(data.results);
            console.log(data.results);
        }catch(error){
            console.error('Error:', error);
        }
    }

    return (
        <div className="container">
            <h1 className="title">Buscador de Películas</h1>

            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Escribe una película"
                    value={busqueda}
                    onChange={onInputChange}
                />

                <button type="submit" className="search-button">Buscar película</button>
            </form>

            <div className="movie-list">
                {
                    peliculas.map((pelicula) => (
                        <div key={pelicula.id} className="movie-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                                alt={pelicula.title}
                            />
                            <h3>{pelicula.title}</h3>
                            <p>{pelicula.overview}</p>
                            <br />
                            <p>Fecha de lanzamiento: {pelicula.release_date}</p>
                            <p>Popularidad: {pelicula.popularity}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
