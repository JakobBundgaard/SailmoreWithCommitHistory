import { NavLink } from "react-router-dom";
import "../css/userBridge.css";
import LoginCrewButton from "./LoginCrewButton";
import LoginCaptainButton from "./LoginCaptainButton";

const UserBridge = () => {
  return (
    <div className="userBridge-overlay">
        <div className="userBridge-content">
          <h2>Log in or Sign up</h2>
          <NavLink to="/profile/CrewLogin">
            <LoginCrewButton />
          </NavLink>
          <h4>Not a member yet! <NavLink to="/profile/CrewSignup">Sign up here..</NavLink></h4>
          <NavLink to="/profile/CaptainLogin">
            <LoginCaptainButton />
          </NavLink>
          <h4>Not a member yet! <NavLink to="/profile/CaptainSignup">Sign up here..</NavLink></h4>
          <NavLink to="/profile/crewProfile" className="profileBtn">
            Crew profile
          </NavLink>
          <NavLink to="/profile/captainProfile" className="profileBtn">
            Captain profile
          </NavLink>
        </div>
  </div>
  )
}

export default UserBridge;