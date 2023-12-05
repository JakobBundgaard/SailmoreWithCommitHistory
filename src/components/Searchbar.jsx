import "../css/SearchBar.css";


import { useState } from 'react';

const SearchBar = () => {
  // State to manage input values
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Function to handle search based on criteria
  const handleSearch = () => {
    // Customize this function to perform the actual search
    console.log('Search Criteria:', { date, location, maxPrice });
  };

  return (
    <div className="search-bar-container">
    <div className="search-input-container">
      <label className="search-label">
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="search-input date-input"
        />
      </label>
      <label className="search-label">
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
      </label>
      <label className="search-label">
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="search-input"
        />
      </label>
    </div>
    <button onClick={handleSearch} className="search-button">
      Search
    </button>
  </div>
  );
};

export default SearchBar;
 