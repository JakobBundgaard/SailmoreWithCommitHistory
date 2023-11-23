import PropTypes from "prop-types";
import "../css/loginButton.css";

function LoginCrewButton({ props }) {
   return (
      <button className="loginButton" onClick={props}>
         Login as crew
      </button>
   );
}

LoginCrewButton.propTypes = {
   props: PropTypes.func.isRequired,
};

export default LoginCrewButton;
