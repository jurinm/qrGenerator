import { useState, useEffect } from "react";
import { AuthContext } from "./store";
import useTokenVerify from "../Hooks/useTokenVerify";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const localToken = localStorage.getItem("token");
  const isTokenValid = useTokenVerify(localToken);

  const authState = () => {
    setToken((currentToken) => (currentToken = localToken));
  };
  useEffect(() => {
    if (isTokenValid) authState();
  }, [isTokenValid]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
