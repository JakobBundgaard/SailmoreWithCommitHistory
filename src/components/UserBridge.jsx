import { NavLink } from "react-router-dom";
import "../css/userBridge.css";
import LoginCrewButton from "./LoginCrewButton";
import LoginCaptainButton from "./LoginCaptainButton";

const onClick = () => {
  console.log('Login button licked!');
};

const UserBridge = () => {
  return (
    <div className="userBridge-overlay">
        <div className="userBridge-content">
          <h2>Log in or Sign up</h2>
          <NavLink to="/profile/CrewLogin">
            <LoginCrewButton onClick={onClick}/>
          </NavLink>
          <h4>Not a member yet! <NavLink to="/profile/CrewSignup">Sign up here..</NavLink></h4>
          <NavLink to="/profile/CaptainLogin">
            <LoginCaptainButton onClick={onClick}/>
          </NavLink>
          <h4>Not a member yet! <NavLink to="/profile/CaptainSignup">Sign up here..</NavLink></h4>
        </div>
  </div>
  )
}

export default UserBridge;