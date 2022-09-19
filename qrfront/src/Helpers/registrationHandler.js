import { endPoints } from "../consts";

async function registrationHandler(inputData) {
  console.log(inputData)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: inputData.email,
      password: inputData.password,
    }),
  };

  const response = await fetch(`${endPoints.registration}`, requestOptions)
  const registrationResult = await response.json()
  return registrationResult
}

export default registrationHandler;
