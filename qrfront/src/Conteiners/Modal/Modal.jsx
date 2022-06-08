import { useState } from "react";

import styles from "./modal.module.css";

const Modal = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={isModalOpen ? styles.modalOpen : styles.modalClosed}>
      <div
        onClick={() => setIsModalOpen((newState) => (newState = false))}
        className={styles.closeButton}
      >
        X
      </div>
      {children}
    </div>
  );
};

export default Modal;
