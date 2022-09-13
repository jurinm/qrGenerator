import { logo } from "../../assets/img";
import styles from "./navbar.module.css";
import { Button } from "../../Components";
import { Modal} from "../../Conteiners/";
import { useState } from "react";

const Navbar = () => {

  const [authModalState, setAuthModalState] = useState(false)
  const authHandler = () => {
    setAuthModalState(curr => curr = true)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <img src={logo} alt="QR maker logo" />
        </div>        
      </nav>
      <Modal isModalOpen={authModalState} setIsModalOpen={setAuthModalState}>
        
      </Modal>
    </>
  );
};

export default Navbar;
