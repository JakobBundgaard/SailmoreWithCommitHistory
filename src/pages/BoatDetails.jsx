import { Outlet, NavLink } from "react-router-dom";
import placeholder from "../assets/images/boat2.jpg";
import pfboat from "../assets/images/boat2.jpg";
import pfp from "../assets/images/captain.jpg";
import certified from "../assets/images/certified-badge.svg";
import "../css/BoatDetails.css";
import "../css/PreviewTrip.css";
import "../css/SkipperProfile.css";
import BackArrow from "../components/BackArrow";
import EditButton from "../components/EditButton";

function handleClick() {
    console.log("Clicked");
 }

const BoatDetails = () => {
    return (
        <div >
            <div className="top-panel">
                <BackArrow />
            </div>
            <div className='profile-images'>
                <img src={pfboat} alt="Profile Image" />
            </div>
            <div className="page-wrapper">
                <div className='profile-top'>
                    <div>
                        <div className='name-and-age'>
                                <h1 className="BoatName">Den grimme perle</h1>
                                <h3 className="BoatYear">2003</h3>
                        </div>
                        <div className="model-and-crew">
                            <h4 className="BoatModel">Peugot 2003 X274</h4>
                            <h4 className="BoatCrew">Space for 5 crewmates</h4>
                        </div>
                    </div>
                    <div className='edit-profile'>
                        <EditButton onClick={handleClick} />
                    </div>
                </div>
            <hr />
            <h2 className="about-me-boat">About Me</h2>
            <p className="boat-description">🚤 Ahoy there! I'm Den grimme perle, a vintage vessel with stories etched in every plank. Seeking a mate to appreciate sunsets, sea breezes, and the timeless charm of well-aged wood. If you're ready for a journey with a touch of history and a lot of heart, let's set sail together. ⚓️🌅 #VintageVoyager #SeaStories</p>
            <hr />
            <NavLink to="/skipper/:id">
                    <article className="pfp-wrapper">
                        <img src={pfp} alt="Profile picture of {username}" className="pfp" />
                        <div>
                            <img src={certified} alt="Certified Badge" />
                            <h4>Skipper Skræk</h4>
                        </div>
                    </article>
                </NavLink>
            </div>
        </div>
        )

  };
  
  export default BoatDetails;