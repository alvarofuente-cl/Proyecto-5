import React, { useEffect, useState } from 'react'
import Currencies from './pages/Currencies';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  const [countries, setCountries] = useState ([]);
  const [continent, setContinents] = useState ([]);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryTimezone, setSelectedCountryTimezone] = useState('');

// paises con sus nombres, vamos a agruparlos en continentes, vamos a traer la informacion paises (nombre, bandera, poblacion)
 
 useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setCountries(data);
      groupByContinent(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}, []);

const groupByContinent = (countries) => {
  const grouped = countries.reduce((acc, country) => {
    const continent = country.region;
    if (!acc[continent]) acc[continent] = [];
      acc[continent].push(country);
    return acc;
 }, {});
 setContinents(grouped);
}; 

const handleContinentClick = (continent) => {
  setSelectedContinent(continent);
  setSelectedCountry(null);
};

const handleCountryClick = (country) => {
  setSelectedCountry(country);
  setSelectedCountryTimezone(country.timezones[0]);
};


return (
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
              <h1 className="text-4xl font-bold mb-4">Paises por Continente</h1>
              <div className="mb-4">
                {Object.keys(continent).map(continent => (
                  <button key={continent} onClick={() => handleContinentClick(continent)}>
                    {continent}
                  </button>
                ))}
              </div>
              {selectedContinent && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">{selectedContinent}</h2>
                  <ul className="list-disc pl-5">
                    {continent[selectedContinent].map(country => (
                      <li key={country.cca3} className="mb-2">
                        <Link to={`/country/${country.cca3}`} onClick={() => handleCountryClick(country)}>
                          {country.name.common}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          }
        />
        <Route
          path="/country/:cca3"
          element={<Currencies country={selectedCountry} onBack={() => setSelectedCountry(null)} />}
        />
      </Routes>
    </div>
  </Router>
);
};

export default App;