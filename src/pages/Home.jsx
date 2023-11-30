import { useEffect, useState } from 'react';
import PreviewTrip from "../components/PreviewTrip";

const Home = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('/api/trip/readTrip.php')
            .then(response => response.json())
            .then(data => {
                setTrips(data);
                console.log(data)
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="page-wrapper">
            <h1>Recommended trips</h1>
            {trips.map((trip, index) => (
                <PreviewTrip key={index} trip={trip} />
            ))}
        </div>
    );
};
  
export default Home;