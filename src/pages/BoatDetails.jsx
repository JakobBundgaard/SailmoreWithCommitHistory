import { Outlet, NavLink } from "react-router-dom";
import placeholder from "../assets/images/boat2.jpg";
import pfp from "../assets/images/boat2.jpg";
import certified from "../assets/images/certified-badge.svg";
import "../css/PreviewTrip.css";
import "../css/SkipperProfile.css";

const BoatDetails = () => {
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
                                <h1 className="BoatName">Den grimme perle</h1>
                                <h3 className="BoatYear">2003</h3>
                        </div>
                        <div className="model-and-crew">
                            <h4 className="BoatModel">Peugot 2003 X274</h4>
                            <h4 className="BoatCrew">Space for 5 crewmates</h4>
                        </div>
                    </div>
                    {/* <div className='edit-profile'>
                        <p>Rediger profil component</p>
                    </div> */}
                </div>
            <hr />
            <h2>About Me</h2>
            <p>Ahoy! Im Skræk, a sea-loving adventurer with a passion for boat vacations. Whether its a sailboat or a yacht, Im all about making waves and unforgettable memories. Join me as I navigate life with a compass in hand and a splash of personality. Ready for some nautical fun? #SailorLife</p>
            </div>
        </div>
        )

  };
  
  export default BoatDetails;