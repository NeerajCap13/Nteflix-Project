import React, { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({
    name: "Basic",
    price: "₹199",
  });
  const [value, setValue] = useState("");

  const contextValue = {
    email,
    setEmail,
    selectedPlan,
    setSelectedPlan,
    value,
    setValue,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
