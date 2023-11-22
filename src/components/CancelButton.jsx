import "../css/cancelButton.css";

function CancelButton(props) {
   return (
      <button className="cancelButton" onClick={props}>
         Cancel
      </button>
   );
}

export default CancelButton;
