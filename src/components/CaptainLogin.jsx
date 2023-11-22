import { useState } from 'react';
// import { Link } from 'react-router-dom';
import crewImage from "../assets/images/Asian_sunset.jpg";
// import CrewSignup from './CrewSignup';
import "../css/captainLogin.css";

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
    <div>
        <h2>Captain Login</h2>
        <img src={crewImage} alt="Beautiful Image" className='crewImage' />
        <form onSubmit={handleSubmit}>
            <label className='label'>
            Email:
            <input type="email" name="crewEmail" value={formData.crewEmail} onChange={handleChange} required />
            </label>

            <label className='label'>
            Password:
            <input type="password" name="crewPassword" value={formData.crewPassword} onChange={handleChange} required />
              </label>  
              
            <h4>Not a member yet! Sign up here...</h4>
            {/* <h4>Not a member yet! <Link to="/CrewSignup">Sign up here...</Link></h4> */}
            <div className='buttonDiv'>
                <button type="submit">Sign Up</button>
                <button type="submit">Cancel</button>   
            </div>
        </form>  
    </div>
  );
};

export default CrewLogin;