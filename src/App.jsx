import "./App.css";
import Accordion from "./Components/Accordion/Accordion.jsx";

import "./Components/Banner/banner.css";

import Banner from "./Components/Banner/banner.jsx";
import MoreInfo from "./Components/ContentInfo/MoreInfo.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Slider from "./Components/Slider/Slider.jsx";
// index.js or App.js

function App() {
  return (
    <>
      <Banner />
      <Slider/>
      <MoreInfo/>
      <Accordion/>
      <Footer/>
    </>
  );
}

export default App;
