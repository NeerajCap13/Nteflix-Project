import React, { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({
    name: "Basic",
    price: "₹199",
  });
  const [value, setValue] = useState("");

  const[verifiedEmail,setVerifiedEmail] = useState("")

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    selectedPlan,
    setSelectedPlan,
    value,
    setValue,
    verifiedEmail,
    setVerifiedEmail
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
