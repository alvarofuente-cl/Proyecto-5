import React from 'react';

const Currencies = ({ country, onBack }) => {
  if (!country) return <div className="text-center">Selecciona un país para ver detalles</div>;

  return (
    <div className="p-4 max-w-lg mx-auto">
      <button onClick={onBack} className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600">Back</button>
      <h2 className="text-3xl font-bold text-red-800 mb-4">{country.name.common}</h2>
      <p className="mb-2"><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p className="mb-2"><strong>Población:</strong> {country.population.toLocaleString()}</p>
      <p className="mb-2"><strong>Región:</strong> {country.region}</p>
      <p className="mb-2"><strong>Zona Horaria:</strong> {country.timezones[0]}</p>
      <p><strong>Bandera:</strong> <img src={country.flags.png} alt={`Bandera de ${country.name.common}`} className="w-32 h-auto" /></p>
    </div>
  );
};

export default Currencies;