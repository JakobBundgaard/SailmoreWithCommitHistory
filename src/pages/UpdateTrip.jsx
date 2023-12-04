import "../css/AddShip.css";
import crewImage from "../assets/images/boat2.jpg";
import SaveButton from "../components/SaveButton.jsx";
import CancelButton from "../components/CancelButton.jsx";
import BackArrow from "../components/BackArrow.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateTrip = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    tripDescription: "",
    startLocation: "",
    endLocation: "",
    totalCrewSpaces: "",
    price: "",
    equipment: "",
    rules: ""
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`../api/trip/readTrip.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error("Fejl ved hentning af data:", error);
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Data til backend:", { ...formData, tripId: id });
      // Send the form data to your server for insertion into the database
      const response = await fetch("../../api/trip/updateTrip.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, tripId: id }), // inkluder shipId i dataen
      });

      if (response.ok) {
        console.log("Opdateret trip-information!");
      } else {
        console.error("Fejl ved opdatering af trip");
      }
    } catch (error) {
      console.error("Fejl:", error);
    }
  };

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div className="page-wrapper">
      <BackArrow />
      <DeleteButton />
      <h1>Edit trip:{id}</h1>
      <img src={crewImage} alt="Beautiful Image" className="crewImage" />
      <form onSubmit={handleSubmit} className="signupform">

        <label className="label">
          Start Location:
          <input
            type="text"
            name="startLocation"
            value={formData.startLocation}
            onChange={handleChange}
            className="signupInput"
            required
          />
        </label>

        <label className="label">
          End Location:
          <input
            type="text"
            name="endLocation"
            value={formData.endLocation}
            onChange={handleChange}
            className="signupInput"
            required
          />
        </label>

        <label className="label">
          Trip Description:
          <textarea
            name="tripDescription"
            value={formData.tripDescription}
            onChange={handleChange}
            className="bioField"
          ></textarea>
        </label>

          <label className="label">
            Start Date:
            <input
              type="datetime-local"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="smallInputField"
            />
          </label>

          <label className="label">
            End Date:
            <input
              type="datetime-local"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="smallInputField"
            />
          </label>

          <label className="label">
            Price €:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="smallInputField"
            />
          </label>

          <label className="label">
            Equipment:
            <input
              type="text"
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              className="smallInputField"
            />
          </label>

          <label className="label">
            Rules:
            <input
              type="text"
              name="rules"
              value={formData.rules}
              onChange={handleChange}
              className="smallInputField"
            />
          </label>

        <div className="flexRow">
          <SaveButton onClick={handleClick} />
          <CancelButton />
        </div>
      </form>
    </div>
  );
};

export default UpdateTrip;
