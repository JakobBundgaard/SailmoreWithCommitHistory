import PropTypes from "prop-types";
import "../css/loginButton.css";

function LoginCaptainButton({ props }) {
   return (
      <button className="loginButton" onClick={props}>
         Login as captain
      </button>
   );
}

LoginCaptainButton.propTypes = {
   props: PropTypes.func.isRequired,
};

export default LoginCaptainButton;
