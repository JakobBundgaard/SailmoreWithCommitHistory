import PropTypes from "prop-types";
import "../css/loginButton.css";

function LoginCrewButton({ onClick }) {
   return (
      <button className="loginButton" onClick={onClick}>
         Login as CREW
      </button>
   );
}

LoginCrewButton.propTypes = {
   onClick: PropTypes.func.isRequired,
};

export default LoginCrewButton;
