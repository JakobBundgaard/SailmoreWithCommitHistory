import PropTypes from "prop-types";
import "../css/SaveButton.css";

function SaveButton({ props }) {
   return (
      <button className="saveButton" onClick={props}>
         Save
      </button>
   );
}

SaveButton.propTypes = {
   props: PropTypes.func.isRequired,
};

export default SaveButton;
