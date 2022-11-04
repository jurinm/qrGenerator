import { logo } from "../../assets/img";
import styles from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../Components";
import { Modal} from "../../Conteiners/";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoggedInNavbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/auth'}>
          My profile
          </Link>
          <Link to={'/registration'}>
          Registration
          </Link>
        </div>        
      </nav>
    </>
  )
}


const Navbar = () => {

  const [authModalState, setAuthModalState] = useState(false)
  const token = useSelector((state) => state.auth.token);

  if(token){
    return <LoggedInNavbar/>
  }

  return (
          <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/registration'}>
          Registration
          </Link>
          <Link to={'/auth'}>
          Login
          </Link>
        </div>        
      </nav>
    </>
  );
};

export default Navbar;
