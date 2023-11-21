import placeholder from "../assets/images/boat.jpg";
import "../css/PreviewTrip.css";

const PreviewTrip = () => {
    return <div className="preview-wrapper">
        <div>
            <img src={placeholder} alt="Preview Image" />

        </div>
        <div className="description-wrapper">
            <div>
                <h3>Den grimme perle</h3>
                <span>15 nov - 1 dec </span>
                <span>· 0 stops</span>
            </div>
            <div>
                <div className="preview-trip-price">
                    <p>$40</p>
                    <span>per day</span>
                </div>
            </div>
        </div>
    </div>;
  };
  
  export default PreviewTrip;