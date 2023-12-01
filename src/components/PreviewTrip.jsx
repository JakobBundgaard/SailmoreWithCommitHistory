import { Outlet, NavLink } from "react-router-dom";
import placeholder from "../assets/images/boat.jpg";
import "../css/PreviewTrip.css";
import { useEffect, useState } from 'react';


const PreviewTrip = ({ trip }) => {
    // Destructure trip to individual variables
    const { tripId, startLocation, endLocation, shipId, shipName, captainId, imagePath } = trip;

    // Convert startDate and endDate to Date objects
    const startDateObj = new Date(trip.startDate);
    const endDateObj = new Date(trip.endDate);

    // Format startDate and endDate
    const options = { year: 'numeric', day: 'numeric', month: 'short' };
    const startDateFormatted = startDateObj.toLocaleDateString('en-GB', options);
    const endDateFormatted = endDateObj.toLocaleDateString('en-GB', options);

    return <>
        <NavLink to={`/trip/${tripId}`}>
            <div className="preview-wrapper preview-container">
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
                        <div className="hashtag-container">
                            <div className="text-bubble hashtag">
                                <p>smoke-free</p>
                            </div>
                            <div className="text-bubble hashtag">
                                <p>ø-hop</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="text-bubble">
                            <p>$40</p>
                            <span>per day</span>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
        <Outlet />
    </>;
  };
  
  export default PreviewTrip;