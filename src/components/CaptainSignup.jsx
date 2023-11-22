import "../css/captainSignup.css";
import captainImage from "../assets/images/captain.jpg";
import { useState } from "react";

function CaptainSignup() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [nationality, setNationality] = useState("");
   const [bio, setBio] = useState("");
   const [gender, setGender] = useState("");
   const [age, setAge] = useState("");

   const handleInputChange = event => {
      switch (event.target.name) {
         case "name":
            setName(event.target.value);
            break;
         case "email":
            setEmail(event.target.value);
            break;
         case "password":
            setPassword(event.target.value);
            break;
         case "nationality":
            setNationality(event.target.value);
            break;
         case "bio":
            setBio(event.target.value);
            break;
         case "gender":
            setGender(event.target.value);
            break;
         case "age":
            setAge(event.target.value);
            break;
         default:
            console.log("Invalid input");
            break;
      }
   };

   //Add a submit handler here

   return (
      <div className="capLoginPage">
         <h1>Captain Signup</h1>
         <img src={captainImage} alt="Captain Signup" />
         <div className="flexGrid">
            <form>
               <label className="flexItem" htmlFor="name">
                  Name
               </label>
               <input className="flexItem" type="text" name="name" value={name} onChange={handleInputChange} />
               <label className="flexItem" htmlFor="email">
                  Email
               </label>
               <input className="flexItem" type="text" name="email" value={email} onChange={handleInputChange} />
               <label className="flexItem" htmlFor="password">
                  Password
               </label>
               <input className="flexItem" type="password" name="password" value={password} onChange={handleInputChange} />
               <label className="flexItem" htmlFor="nationality">
                  Nationality
               </label>
               <input className="flexItem" type="text" name="nationality" value={nationality} onChange={handleInputChange} />
               <label className="flexItem" htmlFor="bio">
                  Bio
               </label>
               <textarea className="flexItem" type="text" name="bio" value={bio} onChange={handleInputChange} />
               <div className="flexRow">
                  <div className="flexCol">
                     <label className="flexItem slim" htmlFor="gender">
                        Gender
                     </label>
                     <select className="flexItem" id="gender" name="gender" value={gender} onChange={handleInputChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                     </select>
                  </div>
                  <div className="flexCol">
                     <label className="flexItem slim" htmlFor="age">
                        Age
                     </label>
                     <input className="flexItem slim" type="number" name="age" value={age} onChange={handleInputChange} />
                  </div>
               </div>
               <div className="flexRow">
                  <button className="slim" type="submit">
                     Save
                  </button>
                  <button className="slim" type="reset">
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default CaptainSignup;
