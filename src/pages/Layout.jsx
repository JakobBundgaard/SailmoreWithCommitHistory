import { Outlet, NavLink } from "react-router-dom";
import sailboat from "../assets/images/sailboat.svg";
import info from "../assets/images/info.svg";
import inbox from "../assets/images/speech-bubble.svg";
import profile from "../assets/images/profile.svg";
import PlusButton from "../components/PlusButton";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/"><img src={sailboat} alt="Sailboat Icon" /></NavLink>
          </li>
          <li>
            <NavLink to="/info"><img src={info} alt="Info Icon" /></NavLink>
          </li>
          <PlusButton />
          <li>
            <NavLink to="/inbox"><img src={inbox} alt="Messages and Notifications Icon" /></NavLink>
          </li>
          <li>
            <NavLink to="/profile"><img src={profile} alt="Profile Icon" /></NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;