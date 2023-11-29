import { useState, useEffect } from 'react';
import "../css/crewSignup.css";
import crewImage from "../assets/images/Asian_sunset.jpg";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

const CrewSignup = () => {
  console.log('CrewSignup rendered');

  const [formData, setFormData] = useState({
    crewName: '',
    crewAge: 0,
    crewPassword: '',
    crewEmail: '',
    crewGender: '',
    crewNationality: '',
    crewExperience: '',
    crewDescription: '',
    crewSkill: [''],
  });

  const [genderOptions, setGenderOptions] = useState([]);
  const [nationalityOptions, setNationalityOptions] = useState([]);
  const [skillOptions, setSkillOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillResponse, nationalityResponse, genderResponse] = await Promise.all([
          fetch('/api/crew/getSkillOptions.php'),
          fetch('/api/crew/getNationalityOptions.php'),
          fetch('/api/crew/getGenderOptions.php'),
        ]);

        if (skillResponse.ok) {
          const skillData = await skillResponse.json();
          setSkillOptions(skillData);
        } else {
          console.error('Error fetching skill options');
        }

        if (nationalityResponse.ok) {
          const nationalityData = await nationalityResponse.json();
          console.log('Nationality Options:', nationalityData);
          setNationalityOptions(nationalityData);
        } else {
          console.error('Error fetching nationality options');
        }

        if (genderResponse.ok) {
          const genderData = await genderResponse.json();
          console.log('Gender Options:', genderData);
          setGenderOptions(genderData);
        } else {
          console.error('Error fetching gender options');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Run this effect only once on component mount

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'crewNationality') {
      const selectedNationality = nationalityOptions.find((option) => option === value);
      const selectedNationalityId = selectedNationality ? nationalityOptions.indexOf(selectedNationality) + 1 : '';
      setFormData({ ...formData, [name]: selectedNationalityId });
    } else if (name === 'crewGender') {
      const selectedGenderId = genderOptions.indexOf(value) +1;
      console.log('Gender Options:', genderOptions);
      console.log('Selected Value:', value);
      console.log('Selected Gender ID:', selectedGenderId);
      setFormData({ ...formData, [name]: selectedGenderId });
    } else if (name.startsWith('crewSkill')) {
      const index = parseInt(name.replace('crewSkill', ''), 10);
      const newSkills = [...formData.crewSkill];
      newSkills[index] = value;
      setFormData({ ...formData, crewSkill: newSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.crewSkill];
    newSkills[index] = value;
    setFormData({ ...formData, crewSkill: newSkills });
  };

  const addSkill = () => {
    setFormData({ ...formData, crewSkill: [...formData.crewSkill, ''] });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      console.log('Save button clicked!');
      const response = await fetch('/api/crew/crewSignup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          crewName: formData.crewName,
          crewAge: formData.crewAge,
          crewPassword: formData.crewPassword,
          crewEmail: formData.crewEmail,
          crewGender: formData.crewGender,
          crewNationality: formData.crewNationality,
          crewExperience: formData.crewExperience,
          crewDescription: formData.crewDescription,
          crewSkill: formData.crewSkill,
        }),
      });

      if (response.ok) {
        console.log("Response ", response);
        console.log('User signed up successfully!');
      } else {
        console.error('Error signing up user');
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
      <h2 className='signupTitle'>Crew Signup</h2>
      <img src={crewImage} alt="Beautiful Image" className='crewImage' />
      <form onSubmit={handleSave} className='signupform'>

        {/* Input fields for user details */}
        <label className='label'>
          Name:
          <input type="text" name="crewName" value={formData.crewName} onChange={handleChange} className='signupInput' required />
        </label>

        <label className='label'>
          Email:
          <input type="email" name="crewEmail" value={formData.crewEmail} onChange={handleChange} className='signupInput'required />
        </label>

        <label className='label'>
          Password:
          <input type="password" name="crewPassword" value={formData.crewPassword} onChange={handleChange} className='signupInput' required />
        </label>

        <label className='label'>
          Password Repeat:
          <input type="password" name="crewPasswordRepeat" value={formData.repeatPassword} onChange={handleChange} className='signupInput' required />
        </label>

        <label className='label'>
        Nationality:
        <select name="crewNationality"  onChange={handleChange} className='genderSelect'>
          <option value="">Select Nationality</option>
              {nationalityOptions.map((nationality) => (
                <option key={nationality} value={nationality}>
                  {nationality}
          </option>
              ))}
        </select>
        
      </label>

        <label className='label'>
          Experience:
          <input type="text" name="crewExperience" value={formData.crewExperience} onChange={handleChange} className='signupInput' />
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
                {skillOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
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
          Bio:
          <textarea name="crewDescription" value={formData.crewDescription} onChange={handleChange} className='bioField'></textarea>
        </label>

        <div className="gender-age-container">

        <label className='label'>
          Gender:
          <select name="crewGender" onChange={handleChange} className='genderSelect'>
            <option value="">Select Gender</option>
            {/* Map over genderOptions to generate options */}
            {genderOptions.map((gender) => (
            <option key={gender} value={gender}>
                     {gender}
            </option>
            ))}
          </select>
        </label>

          <label className='label'>
            Age:
            <input type="number" name="crewAge" value={formData.crewAge} onChange={handleChange} className='crewAge'/>
          </label>
        </div>

        <div className="flexRow">
              <SaveButton onClick={handleSave} />
              <CancelButton onClick={handleCancel}/>
        </div>
 
      </form>
    </div>
  );
};

export default CrewSignup;