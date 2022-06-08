import { endPoints } from "../consts";

async function loginHandler(inputData) {
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
    .then((token) => token.token)
    .catch((er) => console.error(er))
    .finally((token) => console.log(token));
  return response;
}

export default loginHandler;
