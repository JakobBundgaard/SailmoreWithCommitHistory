import { useState } from 'react';
// import { Link } from 'react-router-dom';
import crewImage from "../assets/images/Asian_sunset.jpg";
// import CrewSignup from './CrewSignup';
import "../css/captainLogin.css";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

const CrewLogin = () => {
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
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect or show a success message
        console.log('User logged in successfully!');
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
        <h2 className='loginTitle'>Captain Login</h2>
        <img src={crewImage} alt="Beautiful Image" className='crewImage' />
        <form onSubmit={handleSubmit} className='loginForm'>
            <label className='label'>
            Email:
            <input type="email" name="crewEmail" value={formData.crewEmail} onChange={handleChange} className='loginInput' required />
            </label>

            <label className='label'>
            Password:
            <input type="password" name="crewPassword" value={formData.crewPassword} onChange={handleChange} className='loginInput' required />
              </label>  
              
              <div className="flexRow">
                  <SaveButton />
                  <CancelButton />
            </div>
        </form>  
    </div>
  );
};

export default CrewLogin;