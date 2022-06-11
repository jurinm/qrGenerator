import { useContext, useState } from "react";
import { AuthContext } from "../../store/store";
import { SignUp, Login } from "../../Components";
import { loginHandler } from "../../Helpers";
import styles from "./auth.module.css";

const Auth = () => {
  const { setToken } = useContext(AuthContext);
  const [selected, setSelected] = useState("signin");

  const selectHandler = () => {
    if (selected === "signin") return <Login />;
    if (selected === "signup") return <SignUp />;
  };

  const logHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const loginData = Object.fromEntries(data.entries());
    const token = await loginHandler(loginData);
    localStorage.setItem("token", token);
    setToken((newToken) => (newToken = token));
    e.target.reset();
  };

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
