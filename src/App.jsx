// import "./App.css";
import "./css/Navbar.css"
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";



function App() {
   return (
      <>
        
         <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="info" element={<Info />} />
               <Route path="inbox" element={<Inbox />} />
               <Route path="profile" element={<Profile />} />
               <Route path="*" element={<NoPage />} />
            </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
