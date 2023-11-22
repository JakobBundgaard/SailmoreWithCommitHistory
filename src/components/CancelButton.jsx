import PropTypes from "prop-types";
import "../css/cancelButton.css";

function CancelButton({props}) {
   return (
      <button className="cancelButton" onClick={props}>
         Cancel
      </button>
   );
}

CancelButton.propTypes = {
   props: PropTypes.func.isRequired,
};

export default CancelButton;
