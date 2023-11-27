import { Outlet, NavLink } from "react-router-dom";
import placeholder from "../assets/images/boat.jpg";
import pfp from "../assets/images/captain.jpg";
import certified from "../assets/images/certified-badge.svg";
import "../css/PreviewTrip.css";
import "../css/TripDetails.css";

const BoatDetails = () => {
    return <div style={{padding: '1em', marginBottom: '80px'}}>
        <div className="preview-wrapper">
            <div className="top-panel">
                <p>backbutton component</p>
                <h1>Lolland - Bornholm</h1>
            </div>
            <div className="preview-image-container">
                <img src={placeholder} alt="Preview Image" />
                <div className="text-bubble preview-location">
                    <p>Lolland - Bornholm</p>
                </div>
            </div>
            <div className="description-wrapper">
                <div>
                    <h3>Den grimme perle</h3>
                    <p>15 nov - 1 dec · 0 stops</p>
                    <p>2 / 4 gaster</p>
                </div>
                <div>
                    <div className="text-bubble">
                        <p>$40</p>
                        <span>per day</span>
                    </div>
                </div>
            </div>
            <div>
                <p>Join Den Grimme Perle and captain Haddock on a 2 week trip in the Denmark</p>
                <p>insert location stops component here</p>
                <NavLink to="/skipper/:id">
                    <article className="pfp-wrapper">
                        <img src={pfp} alt="Profile picture of {username}" className="pfp" />
                        <div>
                            <img src={certified} alt="Certified Badge" />
                            <h4>Skipper Skræk</h4>
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
  
  export default BoatDetails;