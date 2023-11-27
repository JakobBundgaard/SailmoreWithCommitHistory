import pfp from '../assets/images/captain.jpg';
import '../css/SkipperProfile.css';
import PreviewTrip from "../components/PreviewTrip";
import BoatPreview from '../components/BoatPreview';
import { Outlet, NavLink } from "react-router-dom";

const SkipperProfile = () => {
    return (
        <div >
            <div className="top-panel">
                <p>backbutton component</p>
            </div>
            <div className='profile-images'>
                <img src={pfp} alt="Profile Image" />
            </div>
        <div className="page-wrapper">
            <div className='profile-top'>
                <div>
                    <div className='name-and-age'>
                        <h1>Skræk</h1>
                        <h3>48</h3>
                    </div>
                    <h4>Jeg kan godt lide spinat</h4>
                    <div className='profile-hashtags'>
                        <div className="text-bubble profile-hashtag">
                            <p>Male</p>
                        </div>
                        <div className="text-bubble profile-hashtag">
                            <p>Danish</p>
                        </div>
                    </div>
                </div>
                <div className='edit-profile'>
                    <p>Rediger profil component</p>
                </div>
            </div>
            
            <hr />
            <h2>About Me</h2>
            <p>Ahoy! Im Skræk, a sea-loving adventurer with a passion for boat vacations. Whether its a sailboat or a yacht, Im all about making waves and unforgettable memories. Join me as I navigate life with a compass in hand and a splash of personality. Ready for some nautical fun? #SailorLife</p>
            <hr />
            <h2>My Skills</h2>
            <div className="text-bubble">
                <p>Fiskeri</p>
            </div>
            <hr />
            <h2>My Trips</h2>
            <details className='drop-down'>
                <summary>
                    Active Trips
                </summary>
                <br />
                <PreviewTrip/>
            </details>
            <hr />
            <details className='drop-down'>
                <summary>
                    Future Trips
                </summary>
                <br />
                <PreviewTrip/>
            </details>
            <hr />
            <details className='drop-down'>
                <summary>
                    Past Trips
                </summary>
                <br />
                <PreviewTrip/>
            </details>
            <hr />
            <h2>My Boats</h2>
            <NavLink to="/boat/:id">
                <BoatPreview />
            </NavLink>
            <Outlet />
            <hr />
            <p>log out component</p>
        </div>
        </div>
        )

  };
  
  export default SkipperProfile;