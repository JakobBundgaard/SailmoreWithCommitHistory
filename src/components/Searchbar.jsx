import "../css/SearchBar.css";
import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../assets/images/search-icon.svg';

const SearchBar = ({ updateSearchResults }) => {
  // State to manage input values
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [dateActivated, setDateActivated] = useState(false);
  const [locationActivated, setLocationActivated] = useState(false);
  const [maxPriceActivated, setMaxPriceActivated] = useState(false);

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
      setShowSearchBar(false); // Hide the search bar when the search button is clicked
          // Set individual activators to true when handleSearch is called
      date ? setDateActivated(true) : setDateActivated(false);
      location ? setLocationActivated(true) : setLocationActivated(false);
      maxPrice ? setMaxPriceActivated(true) : setMaxPriceActivated(false);

    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="search-wrapper">
      <div className="fake-search" onClick={() => setShowSearchBar(prevShowSearchBar => !prevShowSearchBar)}>
        <img src={SearchIcon} alt="search icon" />
        {dateActivated && <span>Date: {date} </span>}
        {locationActivated && <span>Location: {location} </span>}
        {maxPriceActivated && <span>Max Price: {maxPrice} </span>}

      </div>
      {showSearchBar && (
      <div className="search-bar-container">
        <div className="search-input-container">
          <label className="search-label">
            Date:
          </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="search-input date-input"
            />
          
          <label className="search-label">
            Location:
          </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-input"
            />
          
          <label className="search-label">
            Max Price:
          </label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="search-input"
            />
          
        </div>
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
    )}
    </div>
  );
};

SearchBar.propTypes = {
    updateSearchResults: PropTypes.func.isRequired,
  };

export default SearchBar;
