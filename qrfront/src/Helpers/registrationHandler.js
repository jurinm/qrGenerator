import { endPoints } from "../consts";

function registrationHandler(inputData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nickname: inputData.nickname,
      email: inputData.email,
      password: inputData.password,
    }),
  };

  fetch(`${endPoints.registration}`, requestOptions)
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((er) => console.log(er))
    .finally((res) => res);
}

export default registrationHandler;
