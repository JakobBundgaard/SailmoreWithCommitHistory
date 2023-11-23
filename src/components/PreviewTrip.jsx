import { Outlet, NavLink } from "react-router-dom";
import placeholder from "../assets/images/boat.jpg";
import "../css/PreviewTrip.css";

const PreviewTrip = () => {
    return <>
        <NavLink to="/trip/:id">
            <div className="preview-wrapper">
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