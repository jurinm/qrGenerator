import { endPoints } from "../consts";

async function loginHandler(inputData) {
  console.log(inputData)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: inputData.email,
      password: inputData.password,
    }),
  };

  const response = await fetch(`${endPoints.login}`, requestOptions)
    .then((response) => response.json())
    .then((userData) => localStorage.setItem("userData", userData))
    .catch((er) => console.error(er))
    .finally((token) => console.log(token));
    console.log(response)
    return response;
}

export default loginHandler;
