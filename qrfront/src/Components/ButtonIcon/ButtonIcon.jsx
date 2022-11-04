import styles from "./buttonicon.module.css";

const ButtonIcon = ({ ...props }) => {
  
  return (
    <div className={styles.buttonIcon} >
      <img
        className={props.selected === props.buttonId ? styles.buttonSelected : ''}
        id={props.buttonId}
        onClick={(e) => props.iconOnClick(e.target.id)}
        src={props.icon}
        alt={`Make ${props.buttonId} qr code`}
      />
    </div>
  );
};

export default ButtonIcon;
