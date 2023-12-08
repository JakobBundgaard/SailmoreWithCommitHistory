import pfp from '../assets/images/captain.jpg';
import '../css/SkipperProfile.css';
// import PreviewTrip from "../components/PreviewTrip";
import BoatPreview from '../components/BoatPreview';
import { Outlet, NavLink } from "react-router-dom";
import EditButton from '../components/EditButton';
import AddShipButton from '../components/AddShipButton';
import BackArrow from "../components/BackArrow";
import LogoutButton from "../components/LogoutButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const handleLogout = async () => {
    try {
        // Send a request to the server to perform logout
        const response = await fetch('/api/captain/captainLogout.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            sessionStorage.removeItem('captainId');
            sessionStorage.removeItem('crewId');
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

const SkipperProfile = () => {
   const [captain, setCaptain] = useState(null);
    console.log(captain);
   useEffect(() => {
      const capId = sessionStorage.getItem("captainId");

      fetch(`../../api/captain/getLoggedInCaptainInfo.php?=${capId}`)
         .then(Response => Response.json())
         .then(data => {
            setCaptain(data);
         })
         .catch(error => console.error("Error:", error));
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
                    {/* <PreviewTrip/> */}
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
                    <BoatPreview shipId={captain?.shipId} shipModel={captain?.shipModel} shipName={captain?.shipName} shipDescription={captain?.shipDescription}/>
                <Outlet />
                <hr />
                <Link to="/">
                    <LogoutButton onClick={handleLogout} />
                </Link>
            </div>
        </div>
    );
    }
export default SkipperProfile;