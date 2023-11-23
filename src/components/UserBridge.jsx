// import { NavLink } from "react-router-dom";
import "../css/userBridge.css";
import LoginCrewButton from "./LoginCrewButton";
import LoginCaptainButton from "./LoginCaptainButton";

const LoginPopup = () => {
  return (
    <div className="userBridge-overlay">
        <div className="userBridge-content">
        <h2>Log in or Sign up</h2>
        <LoginCrewButton text="Login as crew" />
        {/* <h4>Not a member yet! <NavLink to="/CrewSignup">Sign up here..</NavLink></h4> */}
        <LoginCaptainButton text="Login as captain " />
        {/* <h4>Not a member yet! <NavLink to="/CaptainSignup">Sign up here..</NavLink></h4> */}
        <button className="profileBtn">Captain profile</button>
        <button className="profileBtn">Crew profile</button>

        {/* <LoginCrewButton text="Profile crew" />
        <LoginCrewButton text="Profile crew" /> */}
        </div>
  </div>
  )
}

export default LoginPopup