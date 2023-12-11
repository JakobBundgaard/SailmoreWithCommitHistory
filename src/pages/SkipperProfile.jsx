import pfp from '../assets/images/captain.jpg';
import '../css/SkipperProfile.css';
import BoatPreview from '../components/BoatPreview';
import { Outlet, NavLink } from "react-router-dom";
import EditButton from '../components/EditButton';
import AddShipButton from '../components/AddShipButton';
import BackArrow from "../components/BackArrow";
import LogoutButton from "../components/LogoutButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PreviewTrip from "../components/PreviewTrip";
import { useParams } from "react-router-dom";

const handleLogout = async () => {
    try {
        // Send a request to the server to perform logout
        const response = await fetch('/api/captain/captainLogout.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (sessionCaptainId) {
            sessionStorage.removeItem('captainId');
            window.location.reload();
        } else {
            console.error('Logout failed.');
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }
};

function handleClick() {
   //insert edit profile page code here
   console.log("Clicked");
}

function SkipperProfile() {
    const [captain, setCaptain] = useState(null);
    const [trips, setTrips] = useState([]);
    const sessionCaptainId = sessionStorage.getItem("captainId");
    const { id } = useParams();

    if (id) {
        useEffect(() => {
            fetch(`../../api/captain/readCaptain.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ clickedCaptainId: id }),
            })
            .then(response => response.json())
            .then(data => {
                setCaptain(data);
                console.log(data);
            })
            .catch(error => console.error("Error:", error));
        }, [id]);
    } else {
        useEffect(() => {
            fetch(`../../api/captain/readCaptain.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionCaptainId }),
            })
            .then(response => response.json())
            .then(data => {
                setCaptain(data);
                console.log(data);
            })
            .catch(error => console.error("Error:", error));
        }, [sessionCaptainId]);
    }


    
   
   useEffect(() => {
    fetch('/api/trip/readTrip.php')
        .then(response => response.json())
        .then(data => setTrips(data))
        .catch(error => console.error('Error:', error));
}, []);

    return (
        <div>
            <div className="top-panel">
                <BackArrow />
            </div>
            <div className='profile-images'>
                <img src={pfp} alt="Profile Image" />
            </div>
            <div className="page-wrapper">
                <div className='profile-top'>
                    <div>
                        <div className="name-and-age">
                            {captain && (
                                <>
                                    <h1>{captain.captainName}</h1>
                                    <h3>{captain.captainAge}</h3>
                                </>
                            )}
                        </div>
                        <div className="profile-hashtags">
                            <div className="text-bubble profile-hashtag">
                                {captain && (
                                    <>
                                        <p>{captain.genderName}</p>
                                    </>
                                )}
                            </div>
                            <div className="text-bubble profile-hashtag">
                                {captain && (
                                    <>
                                        <p>{captain.nationalityName}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile">
                        <EditButton onClick={handleClick} />
                    </div>
                </div>

                <hr />
                <h2>About Me</h2>
                {captain && (
                    <>
                        <p>{captain.captainDescription}</p>
                    </>
                )}
                <hr />
                <h2>My Trips</h2>
                <details className="drop-down">
                    <summary>Active Trips</summary>
                    <br />
                    {trips.filter(trip => trip.captainId === trip.captainId).map(trip => (
                    <PreviewTrip key={trip.id} trip={trip} />
                    ))}
                </details>
                <hr />
                <details className="drop-down">
                    <summary>Future Trips</summary>
                    <br />
                    {/* <PreviewTrip/> */}
                </details>
                <hr />
                <details className="drop-down">
                    <summary>Past Trips</summary>
                    <br />
                    {/* <PreviewTrip/> */}
                </details>
                <hr />
                <div className='myShips'>
                    <h2>My Ships</h2>
                    <div className='addShip'>
                        <Link to="/addship">
                            {/* 'to' angiver den sti, du vil navigere til */}
                            <AddShipButton onClick={handleClick} />
                        </Link>
                    </div>
                </div>
                <NavLink to={`/boat?id=${captain?.shipId}`}>
                    <BoatPreview />
                </NavLink>
                <Outlet />
                <hr />
                <Link to="/">
                    {trips.captainId === sessionCaptainId && <LogoutButton onClick={handleLogout} />}
                </Link>
            </div>
        </div>
    );
    }
export default SkipperProfile;