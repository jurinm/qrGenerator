import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../store/store";
import { endPoints } from "../consts";

const useTokenVerify = (token) => {
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (token && (isLoading === true)) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: token,
        }),
      };
      fetch(`${endPoints.verify}`, requestOptions).then((response) => response.status === 200 && setIsTokenValid(true))
      .catch((er) => console.log(er))
      .finally(() => setIsLoading((newState) => (newState = false)));
    }
  }, [])
  
  return isTokenValid;
};

export default useTokenVerify;
