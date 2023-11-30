import { useState } from 'react';
// import { Link } from 'react-router-dom';
import crewImage from "../assets/images/Asian_sunset.jpg";
// import CrewSignup from './CrewSignup';
import "../css/crewLogin.css";
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
        <h2 className='loginTitle'>Crew Login</h2>
        <img src={crewImage} alt="Beautiful Image" className='crewImage' />
        <form onSubmit={handleSave} className='loginForm'>
            <label className='label'>
            Email:
            <input type="email" name="crewEmail" value={formData.crewEmail} onChange={handleChange} className='loginInput' required />
            </label>

            <label className='label'>
            Password:
            <input type="password" name="crewPassword" value={formData.crewPassword} onChange={handleChange} className='loginInput' required />
            </label>  
              
            
            <div className="flexRow">
            <SaveButton onClick={handleSave} />
              <CancelButton onClick={handleCancel}/>
            </div>
        </form>  
    </div>
  );
};

export default CrewLogin;