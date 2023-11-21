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
    crewSkill: [''], 
    imageId: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle skill change
  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.crewSkill];
    newSkills[index] = value;
    setFormData({ ...formData, crewSkill: newSkills });
  };

  // Handle adding a new skill
  const addSkill = () => {
    setFormData({ ...formData, crewSkill: [...formData.crewSkill, ''] });
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

        {/* Input fields for user details */}
        <label className='label'>
          Name:
          <input type="text" name="crewName" value={formData.crewName} onChange={handleChange} required />
        </label>

        <label className='label'>
          Email:
          <input type="email" name="crewEmail" value={formData.crewEmail} onChange={handleChange} required />
        </label>

        <label className='label'>
          Password:
          <input type="password" name="crewPassword" value={formData.crewPassword} onChange={handleChange} required />
        </label>

        <label className='label'>
          Nationality:
          <input type="text" name="crewNationality" value={formData.crewNationality} onChange={handleChange} />
        </label>

        {formData.crewSkill.map((skill, index) => (
            <div key={index} className='skillContainer'>
                <label className='label'>
                Skill {index + 1}:
                <div className="skillSelectContainer">
                    <select
                    name={`crewSkill${index}`}
                    className='skillSelect'
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    >
                    <option value="">Select Skill</option>
                    <option value="Guitar">Guitar</option>
                    <option value="Cooking">Cooking</option>
                    </select>
                </div>
                </label>

                {/* "Plus" button */}
                {index === formData.crewSkill.length - 1 && (
                <button type="button" onClick={addSkill} className='skillButton'>
                    +
                </button>
                )}
            </div>
        ))}
        
        <label className='label'>
          Description:
          <textarea name="crewDescription" value={formData.crewDescription} onChange={handleChange}></textarea>
        </label>

        <div className="gender-age-container">
          <label className='label'>
            Gender:
            <select name="crewGender" value={formData.crewGender} onChange={handleChange} className='genderSelect'>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
  </select>
          </label>

          <label className='label'>
            Age:
            <input type="number" name="crewAge" value={formData.crewAge} onChange={handleChange} className='crewAge'/>
          </label>
        </div>

        <div className='buttonDiv'>
            <button type="submit">Sign Up</button>
            <button type="submit">Cancel</button>   
        </div>
       
      </form>
    </div>
  );
};

export default CrewSignup;