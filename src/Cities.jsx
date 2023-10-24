import React from 'react';
import citiesData from './citiesData';

function Cities({ selectedCountry }) {
  const filteredCities = selectedCountry
    ? citiesData.filter((city) => city.country === selectedCountry)
    : [];
  return (
    <div className="cities">
      <h2>Cities in {selectedCountry}</h2>
      <div className="city-cards">
        {filteredCities.map((city, index) => (
          <div className="city-card" key={index}>
            <h3>{city.name}</h3>
            <img src={city.image} alt={city.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;