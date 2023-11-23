import "../css/addTripShipButton.css";
import PropTypes from "prop-types";

function AddTripButton({ props }) {
   return (
      <button className="addTripShipButton" onClick={props}>
         Add Trip
      </button>
   );
}

AddTripButton.propTypes = {
   props: PropTypes.func.isRequired,
};

export default AddTripButton;
