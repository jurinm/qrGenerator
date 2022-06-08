import { useContext } from "react";
import { AuthContext } from "../../store/store";
import { SignUp } from "../../Components";
import { loginHandler,  } from "../../Helpers";
import styles from './auth.module.css'

const Auth = () => {
    const {setToken} = useContext(AuthContext);

   const logHandler = async (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const loginData = Object.fromEntries(data.entries());
    const token = await loginHandler(loginData)
    localStorage.setItem('token', token)
    setToken(newToken => newToken = token)
    e.target.reset()
   };

  return (
    <div className={styles.auth}>
      <SignUp />
    </div>
  );
};

export default Auth;
