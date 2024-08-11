import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContecxtProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [receiver, setReceiver] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, receiver, setReceiver }}>
      {children}
    </UserContext.Provider>
  );
};
