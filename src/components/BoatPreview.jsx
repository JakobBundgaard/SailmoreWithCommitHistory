import { Outlet, NavLink } from "react-router-dom";
import placeholder from "../assets/images/boat.jpg";
import "../css/PreviewTrip.css";

const BoatPreview = () => {
    return <>
        <NavLink to="/boat/:id">
            <div className="preview-wrapper">
                <div className="preview-image-container">
                    <img src={placeholder} alt="Preview Image" />
                </div>
                <div className="description-wrapper">
                    <div>
                        <h3>Den grimme perle</h3>
                        <p>Peugot 2004 X263 · 2684 nautical miles</p>
                        <p>2 trips</p>
                    </div>
                </div>
            </div>
        </NavLink>
        <Outlet />
    </>;
  };
  
  export default BoatPreview;