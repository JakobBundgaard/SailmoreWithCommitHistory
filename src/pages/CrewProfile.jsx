import { useState, useEffect } from 'react';
import pfp from '../assets/images/crew-pfp.jpg';
import '../css/SkipperProfile.css';
import PreviewTrip from "../components/PreviewTrip";
import EditButton from '../components/EditButton';
import BackArrow from "../components/BackArrow";

const CrewProfile = () => {
    const [loggedInCrewInfo, setLoggedInCrewInfo] = useState(null);

    useEffect(() => {
        // Fetch logged-in crew information
        const fetchLoggedInCrewInfo = async () => {
            try {
                const response = await fetch('/api/crew/getLoggedInCrewInfo.php');
                if (response.ok) {
                    const data = await response.json();
                    setLoggedInCrewInfo(data);
                }
            } catch (error) {
                console.error('Error fetching logged-in crew information:', error);
            }
        };

        fetchLoggedInCrewInfo();
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
                    {loggedInCrewInfo && (
                        <div>
                            <div className='name-and-age'>
                                <h1>{loggedInCrewInfo.crewName}</h1>
                                <h3>{loggedInCrewInfo.crewAge}</h3>
                            </div>
                            <h4>{loggedInCrewInfo.crewDescription}</h4>
                            <div className='profile-hashtags'>
                                <div className="text-bubble profile-hashtag">
                                    <p>{loggedInCrewInfo.crewGender}</p>
                                </div>
                                <div className="text-bubble profile-hashtag">
                                    <p>{loggedInCrewInfo.crewNationality}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='edit-profile'>
                        <EditButton />
                    </div>
                </div>

                <hr />
                <h2>About Me</h2>
                {loggedInCrewInfo && <p>{loggedInCrewInfo.crewDescription}</p>}
                <hr />
                <h2>My Skills</h2>
                {/* Display crew skills as needed */}
                {loggedInCrewInfo && loggedInCrewInfo.crewSkill && (
                    <div className="text-bubble">
                        <p>{loggedInCrewInfo.crewSkill}</p>
                    </div>
                )}
                <hr />
                <h2>My Trips</h2>
                <details className='drop-down'>
                    <summary>
                        Booked Trips
                    </summary>
                    <br />
                    <PreviewTrip />
                </details>
                {/* Add more sections for other types of trips */}
                <hr />
                <p>Logout component</p>
            </div>
        </div>
    );
};

export default CrewProfile;
