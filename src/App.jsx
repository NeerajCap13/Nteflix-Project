import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accordion from "./Components/Accordion/Accordion.jsx";
import "./Components/Banner/banner.css";
import Banner from "./Components/Banner/banner.jsx";
import MoreInfo from "./Components/ContentInfo/MoreInfo.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import SignIn from "./Components/Login/SignIn.jsx";

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
      </Routes>
   
  );
}

export default App;
