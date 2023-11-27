import { useState } from 'react';
import "../css/crewSignup.css";
import crewImage from "../assets/images/Asian_sunset.jpg";
import SaveButton from "../components/SaveButton.jsx";
import CancelButton from "../components/CancelButton.jsx";

const AddTrip = () => {
   const [formData, setFormData] = useState({
      fromLocation: '',
      toLocation: '',
      startDate: '',
      endDate: '',
      tripDescription: '',
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
        const response = await fetch('/api/addtrip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Handle success, e.g., redirect or show a success message
          console.log('Added trip successfully!');
        } else {
          // Handle errors, e.g., show an error message
          console.error('Error adding trip');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <div className="page-wrapper">
        <h1>Add Trip</h1>
        <img src={crewImage} alt="Beautiful Image" className='crewImage' />
        <form onSubmit={handleSubmit} className='signupform'>
  
          {/* Input fields for user details */}
          <label className='label'>
            Upload Image:
            <input type="file" name="uploadImage" value={formData.uploadImage} onChange={handleChange} className='signupInput' required />
          </label>

          <label className='label'>
            From:
            <input type="text" name="fromLocation" value={formData.fromLocation} onChange={handleChange} className='signupInput' required />
          </label>
  
          <label className='label'>
            To:
            <input type="text" name="toLocation" value={formData.toLocation} onChange={handleChange} className='signupInput'required />
          </label>
  
          <label className='label'>
            Start Date:
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className='signupInput' required />
          </label>
  
          <label className='label'>
            End Date:
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className='signupInput' />
          </label>

          
          <label className='label'>
            Description:
            <textarea name="tripDescription" value={formData.tripDescription} onChange={handleChange} className='bioField'></textarea>
          </label>
  
          <div className="flexRow">
                <SaveButton />
                <CancelButton />
          </div>
   
        </form>
      </div>
    );
  };
  
export default AddTrip;