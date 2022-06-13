import { useState, useEffect } from "react";
import { AuthContext } from "./store";
import useTokenVerify from "../Hooks/useTokenVerify";

const AuthProvider = ({ children }) => {
  const localToken = localStorage.getItem("token");
  const localNickname = localStorage.getItem("nickname");

  const [userData, setUserData] = useState({
    nickname: localNickname,
    token: localToken,
  });
  console.log(userData);
  const isUserData = useTokenVerify(localToken);

  const authState = () => {
    setUserData(
      (current) => (current = { nickname: localNickname, token: localToken })
    );
  };
  useEffect(() => {
    if (isUserData) authState();
  }, [isUserData]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
