import PropTypes from "prop-types";
import "../css/SaveButton.css";
import editButton from "../assets/images/editButton.svg";
import "../css/EditButton.css";

function EditButton({ props }) {
   return (
      <button className="editButton" onClick={props}>
         <img src={editButton} alt="Edit button" />
      </button>
   );
}

EditButton.propTypes = {
   props: PropTypes.func.isRequired,
};

export default EditButton;
