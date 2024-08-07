import { createContext, useState } from "react";

export const UserContext = createContext();

// Criando provider
export const UserContextProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState();

  return (
    <UserContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </UserContext.Provider>
  );
};
