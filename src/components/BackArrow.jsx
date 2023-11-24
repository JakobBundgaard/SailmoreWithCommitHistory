import "../css/BackArrow.css";
import { useHistory } from "react-router-dom"; // Assuming you are using React Router

const BackArrow = () => {
   const history = useHistory();

   const goBack = () => {
      history.goBack();
   };

   return (
      <button onClick={goBack}>
         {/* You can customize the arrow icon or text here */}
         Go Back
      </button>
   );
};
export default BackArrow;
