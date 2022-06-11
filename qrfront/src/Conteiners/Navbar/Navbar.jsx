import { logo } from "../../assets/img";
import styles from "./navbar.module.css";
import { Button } from "../../Components";
import { Modal, Auth} from "../../Conteiners/";
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
        <div>
          <Button buttonClickHandler={authHandler}>Sign Up / Sign In</Button>
        </div>
      </nav>
      <Modal isModalOpen={authModalState} setIsModalOpen={setAuthModalState}>
        <Auth />
      </Modal>
    </>
  );
};

export default Navbar;
