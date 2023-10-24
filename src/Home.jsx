import React from 'react';
import countriesData from './countriesData';


function Home({ selectedCountry, setSelectedCountry }) {
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="home">
      <div className="hero-section">
        {/* <h2>Welcome to Cities of the World</h2> */}

        <p id='pa'>Explore cities from around the globe.</p>
      </div>
      <div className="country-selector">
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">-- Select a Country --</option>
          {countriesData.map((country, index) => (
            <option key={index} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Home;