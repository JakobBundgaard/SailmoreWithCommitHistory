import { useState } from 'react';
import "../css/crewSignup.css";
import crewImage from "../assets/images/Asian_sunset.jpg";

const CrewSignup = () => {
  // State to hold user input
  const [formData, setFormData] = useState({
    crewName: '',
    crewAge: '',
    crewPassword: '',
    crewEmail: '',
    crewGender: '',
    crewNationality: '',
    crewDescription: '',
    crewExperience: '',
    crewSkill: '',
    imageId: '',
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
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect or show a success message
        console.log('User signed up successfully!');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Error signing up user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return (
        <div>
            <h2>Crew Signup</h2>
            <img src={crewImage} alt="Beautiful Image" className='crewImage' />
            <form onSubmit={handleSubmit}>
        
                <label>
                    Name:
                    <input type="text" name="crewName" value={formData.crewName} onChange={handleChange} required />
                </label>

                <label>
                    Email:
                    <input type="email" name="crewEmail" value={formData.crewEmail} onChange={handleChange} required />
                </label>

                <label>
                    Password:
                    <input type="password" name="crewPassword" value={formData.crewPassword} onChange={handleChange} required />
                </label>

                <label>
                    Nationality:
                    <input type="text" name="crewNationality" value={formData.crewNationality} onChange={handleChange} />
                </label>

                <label>
                    Skill:
                    <select name="crewSkill" value={formData.crewSkill} onChange={handleChange}>
                    <option value="">Select Skill</option>
                    <option value="option1">Guitar</option>
                    <option value="option2">Cooking</option>
                    </select>
                </label>

                <label>
                    Experience:
                    <input type="text" name="crewExperience" value={formData.crewExperience} onChange={handleChange} />
                </label>

                <label>
                    Description:
                    <textarea name="crewDescription" value={formData.crewDescription} onChange={handleChange}></textarea>
                </label>

                <div className="gender-age-container">
                    <label>
                    Gender:
                    <input type="text" name="crewGender" value={formData.crewGender} onChange={handleChange} />
                    </label>

                    <label>
                    Age:
                    <input type="number" name="crewAge" value={formData.crewAge} onChange={handleChange} />
                    </label>
                </div>

                    <button type="submit">Sign Up</button>
            </form>
      </div>
    
  );
};

export default CrewSignup;
