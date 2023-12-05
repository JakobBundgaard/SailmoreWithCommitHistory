import { useEffect, useState } from 'react';
import PreviewTrip from "../components/PreviewTrip";
import SearchBar from "../components/Searchbar";

const Home = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('/api/trip/readTrip.php')
            .then(response => response.json())
            .then(data => {
                setTrips(data);
                console.log(data)
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="page-wrapper">
            <h1>Recommended trips</h1>
            <SearchBar />
            {trips.map((trip, index) => (
                <PreviewTrip key={index} trip={trip} />
            ))}
        </div>
    );
};
  
export default Home;