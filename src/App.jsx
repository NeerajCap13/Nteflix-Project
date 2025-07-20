import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accordion from "./Components/Accordion/Accordion.jsx";
import "./Components/Banner/banner.css";
import Banner from "./Components/Banner/banner.jsx";
import MoreInfo from "./Components/ContentInfo/MoreInfo.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import SignIn from "./Components/Login/SignIn.jsx";
import ForgetPass from "./Components/ForgetPassword/ForgetPass.jsx";
import Registration from "./Components/Registration/Registration.jsx";

function App() {
  return (
  
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Slider />
              <MoreInfo />
              <Accordion />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/loginHelp" element={<ForgetPass/>}/>
        <Route path="/newUser" element={<Registration/>}/>
      </Routes>
   
  );
}

export default App;
