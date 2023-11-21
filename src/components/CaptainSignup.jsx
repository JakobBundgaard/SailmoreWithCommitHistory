import "../css/captainSignup.css";
import captainImage from "../assets/images/captain.jpg";

function CaptainSignup() {
   return (
      <div className="capLoginPage">
         <h1>Captain Signup</h1>
         <img src={captainImage} alt="Captain Signup" />
         <div className="flexGrid">
            <form>
               <label className="flexItem" htmlFor="name">
                  Name
               </label>
               <input className="flexItem" type="text" name="name" />
               <label className="flexItem" htmlFor="email">
                  Email
               </label>
               <input className="flexItem" type="text" name="email" />
               <label className="flexItem" htmlFor="password">
                  Password
               </label>
               <input className="flexItem" type="password" name="password" />
               <label className="flexItem" htmlFor="nationality">
                  Nationality
               </label>
               <input className="flexItem" type="text" name="nationality" />
               <label className="flexItem" htmlFor="bio">
                  Bio
               </label>
               <input className="flexItem" type="text" name="bio" />
               <div className="flexRow">
                  <div className="flexCol">
                     <label className="flexItem slim" htmlFor="gender">
                        Gender
                     </label>
                     <input className="flexItem slim" type="text" name="gender" />
                  </div>
                  <div className="flexCol">
                     <label className="flexItem slim" htmlFor="age">
                        Age
                     </label>
                     <input className="flexItem slim" type="text" name="age" />
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
