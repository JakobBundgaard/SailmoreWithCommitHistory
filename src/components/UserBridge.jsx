import { NavLink } from "react-router-dom";
import "../css/userBridge.css";
import LoginCrewButton from "./LoginCrewButton";
import LoginCaptainButton from "./LoginCaptainButton";

const UserBridge = () => {
  return (
    <div className="userBridge-overlay">
        <div className="userBridge-content">
          <h2>Log in or Sign up</h2>
          <NavLink to="/CrewLogin">
            <LoginCrewButton />
          </NavLink>
          <h4>Not a member yet! <NavLink to="/CrewSignup">Sign up here..</NavLink></h4>
          <NavLink to="/CaptainLogin">
            <LoginCaptainButton />
          </NavLink>
          <h4>Not a member yet! <NavLink to="/CaptainSignup">Sign up here..</NavLink></h4>
          <NavLink to="/crewProfile" className="profileBtn">
            Crew profile
          </NavLink>
          <NavLink to="/captainProfile" className="profileBtn">
            Captain profile
          </NavLink>
        </div>
  </div>
  )
}

export default UserBridge;