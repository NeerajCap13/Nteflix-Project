import React, { createContext, useState } from "react";

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({
    name: "Basic",
    price: "199"
  });


  return (
    <EmailContext.Provider value={[ email,setEmail,selectedPlan,setSelectedPlan]}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContext;
