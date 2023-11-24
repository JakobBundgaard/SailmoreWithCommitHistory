import plus from "../assets/images/plus-icon.svg";
import { NavLink } from "react-router-dom";

let skipper = true;

const PlusButton = () => {
    if (skipper) {
        return (
            <>
                <li>
                    <NavLink to="/addship"><img src={plus} alt="Add trip or boat" /></NavLink>
                </li>
            </>
        )
    }
};

export default PlusButton;