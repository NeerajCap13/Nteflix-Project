import "./App.css";

import "./Components/Banner/banner.css";

import Banner from "./Components/Banner/banner.jsx";
import MoreInfo from "./Components/ContentInfo/MoreInfo.jsx";
import Slider from "./Components/Slider/Slider.jsx";
// index.js or App.js

function App() {
  return (
    <>
      <Banner />
      <Slider/>
      <MoreInfo/>
    </>
  );
}

export default App;
