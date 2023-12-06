import { useState } from 'react';
// import { Link } from 'react-router-dom';
import crewImage from "../assets/images/crew.svg";
// import CrewSignup from './CrewSignup';
import "../css/crewLogin.css";
import BackArrow from "../components/BackArrow";
import LoginButton from "./StandardLoginButton";
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
  const handleSave = async (e) => {
    e.preventDefault();

    try {
        // Send the form data to your server for crew login
        const response = await fetch('/api/crew/crewLogin.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const responseData = await response.json();
            if (responseData.success) {
              console.log('User logged in successfully!');
              
              sessionStorage.setItem('crewId', responseData.crewData.crewId);
              // Redirect or handle success as needed
              window.location.href = "/crewProfile";
            } else {
                console.error('Error logging in:', responseData.error);
                // Handle login error, e.g., show an error message
            }
        } else {
            console.error('Error logging in');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


  const handleCancel = () => {
    console.log('Cancel button clicked!');
  };

  return (
    <div className="page-wrapper">
      <div className="top-panel">
            <BackArrow />
      </div>
        <h2 className='loginTitle'>Crew Login</h2>
        <img src={crewImage} alt="Beautiful Image" className="crewImageLogin" />
        <form onSubmit={handleSave} className='loginForm'>
            <label className='label'>
            <p>Email:</p>
            <input type="email" name="crewEmail" value={formData.crewEmail} onChange={handleChange} className='loginInput' required />
            </label>

            <label className='label'>
            <p>Password:</p>
            <input type="password" name="crewPassword" value={formData.crewPassword} onChange={handleChange} className='loginInput' required />
            </label>  
              
            
            <div className="flexRow">
              <LoginButton onClick={handleSave} />
              <CancelButton onClick={handleCancel}/>
            </div>
        </form>  
    </div>
  );
};

export default CrewLogin;