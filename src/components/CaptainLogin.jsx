import { useState } from 'react';
import captainImage from "../assets/images/Asian_sunset.jpg";
import "../css/captainLogin.css";
import StandardLoginButton from "./StandardLoginButton";
import CancelButton from "./CancelButton";
import BackArrow from "./BackArrow";

const CaptainLogin = () => {
   // State to hold user input
   const [formData, setFormData] = useState({
      crewEmail: '',
      crewPassword: '',
   });

   // Handle input changes
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };


   // Handle form submission
   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         // Send the form data to your server for insertion into the database
         const response = await fetch('/api/captain/captainLogin.php', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            console.log("User logged in successfully!");
            const jsonResponse = await response.json();
            if (jsonResponse["error"]) {
               console.log(jsonResponse["error"]);
            } else if (jsonResponse["success"]) {
               console.log(jsonResponse["success"]);

               const captainId = jsonResponse["captainId"];
               const captainName = jsonResponse["captainName"];

               sessionStorage.setItem("captainId", captainId);
               sessionStorage.setItem("captainName", captainName);

               //navigate to profile page
               window.location.href = "/captainProfile";
            }
         } else {
            // Handle errors, e.g., show an error message
            console.error('Error loggin in');
         }
      } catch (error) {
         console.error('Error:', error);
      }
   };

   return (
      <div className="page-wrapper">
         <BackArrow />
         <h2 className='loginTitle'>Captain Login</h2>
         <img src={captainImage} alt="Beautiful Image" className='crewImage' />
         <form className='loginForm'>
            <label className='label'>
               Email:
               <input type="email" name="captainEmail" value={formData.captainEmail} onChange={handleChange} className='loginInput' required />
            </label>

            <label className='label'>
               Password:
               <input
                  type="password"
                  name="captainPassword"
                  value={formData.captainPassword}
                  onChange={handleChange}
                  className="loginInput"
                  required
               />
            </label>

            <div className="flexRow">
               <StandardLoginButton onClick={handleSubmit} />
               <CancelButton />
            </div>
         </form>
      </div>
   );
};

export default CaptainLogin;
