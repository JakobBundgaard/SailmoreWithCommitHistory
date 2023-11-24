import "./App.css";
import "./css/Navbar.css"
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import TripDetails from "./pages/TripDetails";
import SkipperProfile from "./pages/SkipperProfile";
import UserBridge from "./components/UserBridge";
import CrewLogin from "./components/CrewLogin";
import CaptainLogin from "./components/CaptainLogin";
import CrewSignup from "./components/CrewSignup";
import CaptainSignup from "./components/CaptainSignup";

function App() {
   return (
      <>
        
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="info" element={<Info />} />
                  <Route path="inbox" element={<Inbox />} />
                  <Route path="crewProfile" element={<Profile />} />
                  <Route path="captainProfile" element={<SkipperProfile />} />
                  <Route path="profile" element={<UserBridge />} />
                  <Route path="CrewLogin" element={<CrewLogin />} />
                  <Route path="CaptainLogin" element={<CaptainLogin />} />
                  <Route path="CrewSignup" element={<CrewSignup />} />
                  <Route path="CaptainSignup" element={<CaptainSignup />} />
                  <Route path="*" element={<NoPage />} />
                  <Route path="trip/:id" element={<TripDetails />} />
                  <Route path="skipper/:id" element={<SkipperProfile />} />
            </Route>
            </Routes>
         </BrowserRouter>
         {/* <UserBridge /> */}
      </>
   );
}

export default App;
