import "../css/SearchBar.css";
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ updateSearchResults }) => {
  // State to manage input values
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Function to handle search based on criteria
  const handleSearch = async () => {
    try {
      const endpoint = 'api/search/tripSearch.php';
      const params = new URLSearchParams();
      if (date) params.append('date', date);
      if (location) params.append('location', location);
      if (maxPrice) params.append('maxPrice', maxPrice);

      const url = `${endpoint}?${params.toString()}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Search Results:', data);

      // Call the updateSearchResults function with the search results
      updateSearchResults(data);
    } catch (error) {
      console.error('Error during search:', error);
    }
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

SearchBar.propTypes = {
    updateSearchResults: PropTypes.func.isRequired,
  };

export default SearchBar;
