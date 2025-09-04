import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accordion from "./Components/Accordion/Accordion.jsx";
import "./Components/Banner/banner.css";
import Banner from "./Components/Banner/Banner.jsx";
import MoreInfo from "./Components/ContentInfo/MoreInfo.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import SignIn from "./Components/Login/SignIn.jsx";
import ForgetPass from "./Components/ForgetPassword/ForgetPass.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import Registration2 from "./Components/Registration/Registration2.jsx";
import UserOne from "./Components/RegisteredUser/UserOne.jsx";
import Plans from "./Components/RegisteredUser/Plans.jsx";
import PaymentPicker from "./Components/PaymentZone/PaymentPicker.jsx";
import { Provider } from "./Components/Context/EmailProvider.jsx";
import CreditOption from "./Components/PaymentZone/CreditOption.jsx";
import UPIpay from "./Components/PaymentZone/UPIpay.jsx";
import UPIModal from "./Components/PaymentZone/UPIModal.jsx";
import ConfirmUpiPayment from "./Components/PaymentZone/ConfirmUpiPayment.jsx";
import SignOut from "./Components/Signout/SignOut.jsx";

function App() {
  return (
    <Provider>
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
      <Route path="/loginHelp" element={<ForgetPass />} />
      <Route path="/newUser" element={<Registration />} />
      <Route path="/nextPage" element={<Registration2 />} />
      <Route path="/userOne" element={<UserOne />} />
      <Route path="/newPlan" element={<Plans />} />
      <Route path="/paymentGate" element={<PaymentPicker />} />
      <Route path="/creditOption" element={<CreditOption />} />
      <Route path="/UPI" element={<UPIpay />} />
      <Route path="/findUpi" element={<UPIModal />} />
      <Route path="/upiOrderConfirm" element={<ConfirmUpiPayment />} />
      <Route path="/logout" element={<SignOut />} />
    </Routes>
    </Provider>
  );
}

export default App;
