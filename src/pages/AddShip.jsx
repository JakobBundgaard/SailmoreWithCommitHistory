import { useState } from "react";
import "../css/AddShip.css";
import crewImage from "../assets/images/sailing-unsplash.jpg";
import SaveButton from "../components/SaveButton.jsx";
import CancelButton from "../components/CancelButton.jsx";
import BackArrow from "../components/BackArrow.jsx";

const AddShip = () => {
  const [formData, setFormData] = useState({
    shipName: "",
    shipModel: "",
    shipDescription: "",
    crewSpaces: "",
    shipAge: "",
    imageId: "",
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
      const response = await fetch("/api/addShip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect or show a success message
        console.log("Added trip successfully!");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Error adding trip");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="page-wrapper">
    <BackArrow />
      <h1>Add ship</h1>
      <img src={crewImage} alt="Beautiful Image" className="crewImage" />
      <form onSubmit={handleSubmit} className="signupform">
        {/* Input fields for user details */}
        <label className="label">
          Upload image of your ship:
          <input
            type="file"
            name="uploadImage"
            value={formData.uploadImage}
            onChange={handleChange}
            className="signupInput"
            required
          />
        </label>

        <label className="label">
          Ship name:
          <input
            type="text"
            name="shipName"
            value={formData.shipName}
            onChange={handleChange}
            className="signupInput"
            required
          />
        </label>

        <label className="label">
          Ship model:
          <input
            type="text"
            name="shipModel"
            value={formData.shipModel}
            onChange={handleChange}
            className="signupInput"
            required
          />
        </label>

        <label className="label">
          Describe your ship:
          <textarea
            name="shipDescription"
            value={formData.shipDescription}
            onChange={handleChange}
            className="bioField"
          ></textarea>
        </label>

        <div className="gender-age-container">
          <label className="label">
            Crew spaces:
            <input
              type="number"
              name="crewSpaces"
              value={formData.crewAge}
              onChange={handleChange}
              className="smallInputField"
            />
          </label>

          <label className="label">
            Year:
            <input
              type="number"
              name="shipAge"
              value={formData.crewAge}
              onChange={handleChange}
              className="smallInputField"
            />
          </label>
        </div>

        <div className="flexRow">
          <SaveButton />
          <CancelButton />
        </div>
      </form>
    </div>
  );
};

export default AddShip;
