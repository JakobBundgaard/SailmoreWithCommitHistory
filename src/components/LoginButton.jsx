import PropTypes from "prop-types";
import "../css/loginButton.css";

function LoginButton({ props }) {
   return (
      <button className="loginButton" onClick={props}>
         Login
      </button>
   );
}

LoginButton.propTypes = {
   props: PropTypes.func.isRequired,
};

export default LoginButton;
