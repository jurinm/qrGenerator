import { useContext, useState } from "react";
import { AuthContext } from "../../store/store";
import { SignUp, Login, Spiner } from "../../Components";
import { endPoints } from "../../consts";
import styles from "./auth.module.css";

const Auth = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const [selected, setSelected] = useState("signin");
  const [isLoading, setIsLoading] = useState(false);

  const selectHandler = () => {
    if (isLoading) return <Spiner />
    if (selected === "signin") return <Login loading={isLoading} credentials={userData} isSignedIn={userData?.token ? true : false} authHandler ={{loginHandler , signOut}}/>;
    if (selected === "signup") return <SignUp />;

  };

  function signOut () {
    localStorage.removeItem("token")
    localStorage.removeItem("nickname")
    setUserData(out => out = {nickname: null, token: null})
  };  

  function loginHandler(inputData) {
    setIsLoading(curr => curr = true)
    setTimeout(() => {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: inputData.email,
        password: inputData.password,
      })
    };

    
      fetch(`${endPoints.login}`, requestOptions)
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData)
        localStorage.setItem("token", userData.token)
        localStorage.setItem("nickname", userData.nickname)
        setUserData(newUserData => newUserData = userData)
        console.log(userData)
      })
      .catch((er) => console.error(er))
      .finally(setIsLoading(curr => curr = false))
    }, 1200);
  
    
  }

  return (
    <div className={styles.auth}>
      <div className={styles.selector}>
        <div
          onClick={() => setSelected((curr) => (curr = "signin"))}
          className={
            selected === "signin"
              ? `${styles.selectorSignIn} ${styles.selected}`
              : styles.selectorSignIn
          }
        >
          Sign In
        </div>
        <div
          onClick={() => setSelected((curr) => (curr = "signup"))}
          className={
            selected === "signup"
              ? `${styles.selectorSighUp} ${styles.selected}`
              : styles.selectorSighUp
          }
        >
          Sign Up
        </div>
      </div>
      {selectHandler()}
    </div>
  );
};

export default Auth;
