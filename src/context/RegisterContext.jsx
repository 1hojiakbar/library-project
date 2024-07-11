import { createContext, useState } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [defValue, setToggle] = useState(false);

  const onChange = (bool) => {
    setToggle(bool);
  };

  return (
    <RegisterContext.Provider value={{ defValue, onChange }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;
