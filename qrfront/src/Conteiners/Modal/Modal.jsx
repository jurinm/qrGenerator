import styles from "./modal.module.css";

const Modal = ({ children, ...props }) => {
  if (props.isModalOpen)
  return (
    <div className={styles.modal}>
      <div
        onClick={() => props.setIsModalOpen((newState) => (newState = false))}
        className={styles.closeButton}
      >
        
      </div>
      {children}
    </div>
  );
};

export default Modal;
