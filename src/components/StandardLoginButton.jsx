import "../css/saveButton.css";
import PropTypes from "prop-types";

function StandardLoginButton({ props }) {
   return (
      <button className="saveButton" onClick={props}>
         Log in
      </button>
   );
}

StandardLoginButton.propTypes = {
   props: PropTypes.func.isRequired,
};

export default StandardLoginButton;
