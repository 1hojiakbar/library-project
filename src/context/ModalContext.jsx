import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openModal = (bool) => {
    setOpen(bool);
  };

  return (
    <ModalContext.Provider value={{ open, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
