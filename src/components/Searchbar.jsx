import "../css/SearchBar.css";

import { useState } from 'react';

const SearchBar = () => {
  // State to manage input values
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Function to handle search based on criteria
  const handleSearch = async () => {
    try {
      // Directly use the relative path of the endpoint
      const endpoint = 'api/search/tripSearch.php';

      // Build URL parameters based on user input
      const params = new URLSearchParams();
      if (date) params.append('date', date);
      if (location) params.append('location', location);
      if (maxPrice) params.append('maxPrice', maxPrice);

      // Use the relative path and append parameters
      const url = `${endpoint}?${params.toString()}`;

      // Fetch data from the API
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();
      console.log('Search Results:', data);

      // Handle the results (update state, display, etc.)
      // For example, you might set the search results in state for rendering
      // setResults(data);
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

export default SearchBar;

 