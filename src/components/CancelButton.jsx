import PropTypes from "prop-types";
import "../css/cancelButton.css";

function CancelButton({ onClick }) {
   return (
      <button className="cancelButton" onClick={onClick}>
         Cancel
      </button>
   );
}

CancelButton.propTypes = {
   onClick: PropTypes.func.isRequired,
};

export default CancelButton;
