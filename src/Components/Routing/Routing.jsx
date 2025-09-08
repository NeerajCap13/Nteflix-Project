import React from 'react'
import { Provider } from '../Context/EmailProvider'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Login/SignIn'
import ForgetPass from '../ForgetPassword/ForgetPass'
import Banner from '../Banner/Banner'
import Registration from '../Registration/Registration'
import Registration2 from '../Registration/Registration2'
import UserOne from '../RegisteredUser/UserOne'
import Plans from '../RegisteredUser/Plans'
import PaymentPicker from '../PaymentZone/PaymentPicker'
import CreditOption from '../PaymentZone/CreditOption'
import UPIpay from '../PaymentZone/UPIpay'
import UPIModal from '../PaymentZone/UPIModal'
import ConfirmUpiPayment from '../PaymentZone/ConfirmUpiPayment'
import SignOut from '../Signout/SignOut'
import Layout from '../Banner/Layout'

function Routing() {
  return (
    <Provider>
      <Routes>
        <Route
        path="/"
        element={
          //Homepage
          <>
            <Banner />
            <Layout/>
          </>
          //Homepage
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
  )
}

export default Routing
