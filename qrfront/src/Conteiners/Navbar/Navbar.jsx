import { logo } from "../../assets/img";
import styles from "./navbar.module.css";
import { Button } from "../../Components";
import { Modal} from "../../Conteiners/";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [authModalState, setAuthModalState] = useState(false)
  const authHandler = () => {
    setAuthModalState(curr => curr = true)
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
