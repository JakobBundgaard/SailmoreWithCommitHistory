import { useEffect, useState } from 'react';
import PreviewTrip from "../components/PreviewTrip";
import SearchBar from "../components/Searchbar";

const Home = () => {
  const [trips, setTrips] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // New state for search results

  useEffect(() => {
    fetch('/api/trip/readTrip.php')
      .then(response => response.json())
      .then(data => {
        setTrips(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to update search results based on criteria
  const updateSearchResults = (searchResults) => {
    setSearchResults(searchResults);
  };

  return (
    <div className="page-wrapper">
      <SearchBar updateSearchResults={updateSearchResults} />
      <h1>Recommended trips</h1>
      <br />
      {/* Display either search results or all trips based on the condition */}
      {(searchResults.length > 0 ? searchResults : trips).map((trip, index) => (
        <PreviewTrip key={index} trip={trip} />
      ))}
    </div>
  );
};

export default Home;