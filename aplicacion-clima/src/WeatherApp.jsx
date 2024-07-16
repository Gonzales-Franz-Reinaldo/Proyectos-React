import { useState } from "react"

export const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';

    const API_KEY = '605507acf87117e111e54a3ab5238541';
    const difKelvin = 273.15;

    const [ciudad, setCiudad] = useState('');
    const [dataClima, setDataClima] = useState(null);

    const handleCambioCiudad = (event) => {
        setCiudad(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (ciudad.length > 0) fetchClama()
    }

    const fetchClama = async () => {
        try {
            const reponse = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
            const data = await reponse.json();

            setDataClima(data);
        }catch (error) {
            console.error("Ocurrió un error al obtener el clima: ", error);
        }
    }

    return (
        <div className="container">
            <h1>Aplicación de Clima</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={ciudad} onChange={handleCambioCiudad} />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h1>{dataClima.name}</h1>
                        <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
                        <p>Condición Metorológica: {dataClima.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="clima" />
                    </div>
                )
            }
        </div>
    )
}
