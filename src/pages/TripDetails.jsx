import { Outlet, NavLink } from "react-router-dom";
import placeholder from "../assets/images/boat.jpg";
import pfp from "../assets/images/captain.jpg";
import certified from "../assets/images/certified-badge.svg";
import "../css/PreviewTrip.css";
import "../css/TripDetails.css";
import EditButton from '../components/EditButton';
import BackArrow from "../components/BackArrow";
import { useEffect, useState } from 'react';

const TripDetails = () => {
    const [tripData, setTripData] = useState(null);

    useEffect(() => {
        fetch('/api/trip/readTrip.php')
            .then(response => response.json())
            .then(data => {
                setTripData(data[0]);
                console.log(data)
            })
            .catch(error => console.error('Error:', error));
    }, []);
// Destructure tripData to individual variables
const { tripId, startLocation, endLocation, shipId, shipName, captainId, imagePath, totalCrewSpaces, tripDescription, shipCrew, captainName } = tripData || {};

// Convert startDate and endDate to Date objects
const startDateObj = new Date(tripData?.startDate);
const endDateObj = new Date(tripData?.endDate);

// Format startDate and endDate
const options = { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };
const startDateFormatted = startDateObj.toLocaleDateString('en-GB', options);
const endDateFormatted = endDateObj.toLocaleDateString('en-GB', options);

    return <div style={{padding: '1em', marginBottom: '80px'}}>
        <div className="preview-wrapper">
            <div className="top-panel">
                <BackArrow />
                <h1>{startLocation} - {endLocation}</h1>
            </div>
            <div className="preview-image-container">
                <img src={placeholder} alt="Preview Image" />
                <div className="text-bubble preview-location">
                    <p>{startLocation} - {endLocation}</p>
                </div>
            </div>
            <div className="description-wrapper">
                <div>
                    <h3>{shipName}</h3>
                    <p>{startDateFormatted} - {endDateFormatted} · 0 stops</p>
                    <p>{totalCrewSpaces} / {shipCrew} gaster</p>
                </div>
                <div>
                    <div className="text-bubble">
                        <p>$40</p>
                        <span>per day</span>
                    </div>
                </div>
            </div>
            <div>
                <p>{tripDescription}</p>
                <p>{startLocation} - {endLocation}</p>
                <p>insert location stops component here</p>
                <NavLink to="/skipper/:id">
                    <article className="pfp-wrapper">
                        <img src={pfp} alt="Profile picture of {captainName}" className="pfp" />
                        <div>
                            <img src={certified} alt="Certified Badge" />
                            <h4>{captainName}</h4>
                        </div>
                    </article>
                </NavLink>
                <Outlet />
                <p>Den grimme perle is a 53 foot Grand Soleil from 1998. It has an engine, a mast and 6 crew spaces.</p>
                <article>
                <h4>Equipment on board</h4>
                <ul>
                    <li>Radio</li>
                    <li>Scuba Equipment</li>
                    <li>Spear Fishing Equipment</li>
                </ul>
                </article>

                <article>
                    <h4>Rules on board</h4>
                    <ul>
                        <li>No smoking crack below deck</li>
                        <li>Captains word is law</li>
                    </ul>
                </article>
            </div>
        </div>
        
    </div>

  };
  
  export default TripDetails;