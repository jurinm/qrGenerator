import { endPoints } from "../consts";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Conteiners/Auth/authSlice";

async function loginHandler(inputData) {
  const { email, password } = inputData;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  const response = await fetch(`${endPoints.login}`, requestOptions);
  const userData = await response.json();
  if (response.ok) {
    localStorage.setItem("token", userData.token);
    return userData;
  }
  return "Error";
}

export default loginHandler;
