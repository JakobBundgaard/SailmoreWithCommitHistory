import pfp from '../assets/images/crew-pfp.jpg';
import '../css/SkipperProfile.css';
import PreviewTrip from "../components/PreviewTrip";
import EditButton from '../components/EditButton';
import BackArrow from "../components/BackArrow";

const CrewProfile = () => {
    return (
        <div >
            <div className="top-panel">
                <BackArrow />
            </div>
            <div className='profile-images'>
                <img src={pfp} alt="Profile Image" />
            </div>
        <div className="page-wrapper">
            <div className='profile-top'>
                <div>
                    <div className='name-and-age'>
                        <h1>Crew</h1>
                        <h3>7</h3>
                    </div>
                    <h4>Vov vov!! vovovov!!</h4>
                    <div className='profile-hashtags'>
                        <div className="text-bubble profile-hashtag">
                            <p>Male</p>
                        </div>
                        <div className="text-bubble profile-hashtag">
                            <p>Svensk-Fransk</p>
                        </div>
                    </div>
                </div>
                <div className='edit-profile'>
                    <EditButton />
                </div>
            </div>
            
            <hr />
            <h2>About Me</h2>
            <p>Ahoy! Im Crew, a sea-loving adventurer with a passion for boat vacations. Whether its a sailboat or a yacht, Im all about making waves and unforgettable memories. Join me as I navigate life with a compass in hand and a splash of personality. Ready for some nautical fun? #SailorLife</p>
            <hr />
            <h2>My Skills</h2>
            <div className="text-bubble">
                <p>Fiskeri</p>
            </div>
            <hr />
            <h2>My Trips</h2>
            <details className='drop-down'>
                <summary>
                    Booked Trips
                </summary>
                <br />
                {/* <PreviewTrip/> */}
            </details>
            <hr />
            <details className='drop-down'>
                <summary>
                    Requested Trips
                </summary>
                <br />
                {/* <PreviewTrip/> */}
            </details>
            <hr />
            <details className='drop-down'>
                <summary>
                    Past Trips
                </summary>
                <br />
                {/* <PreviewTrip/> */}
            </details>
            <hr />
            <p>log out component</p>
        </div>
        </div>
        )

  };
  
  export default CrewProfile;