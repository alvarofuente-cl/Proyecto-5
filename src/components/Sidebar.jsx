import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get("https://api.weatherstack.com/current?access_key=1eb6dd050d3608e16f235acd7cccac6c&query=London");
        const data = res.data;
        console.log(data);
        setWeather(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);
  

  if (loading) {
    return <div className="text-center">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error.message}</div>;
  }

  return (
    <div className="flex">
      <Router>
        <div className="container mx-auto p-4">
          <nav className="mb-4">
            <Link to="/"className="text-black-500 hover:underline">Home</Link>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1 className="text-4xl font-bold mb-4">Ciudades</h1>
                  <div className="mb-4">
                      <button key='Nueva York' onClick={() => handleContinentClick('Nueva York')}>New York</button>
                      <button key='London' onClick={() => handleContinentClick('Nueva York')}>London</button>
                      <button key='Singapur' onClick={() => handleContinentClick('Nueva York')}>Singapur</button>
                      <button key='Shanghai' onClick={() => handleContinentClick('Nueva York')}>Shanghai</button>
                      <button key='Santiago' onClick={() => handleContinentClick('Nueva York')}>Santiago</button>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
      <div className="bg-indigo-700 w-64">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow pt-5 pb-4">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-white">Clima en {weather.location.name}</h1>
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <p className="text-white">Temperatura: {weather.current.temperature}°C</p>
              <p className="text-white">Condiciones: {weather.current.weather_descriptions[0]}</p>
              <p className="text-white">Humedad: {weather.current.humidity}%</p>
              <p className="text-white">Viento: {weather.current.wind_speed} km/h</p>
              <img src={weather.current.weather_icons[0]} alt="Icono del clima" className="w-32 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
;


export default App;
