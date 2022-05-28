import "./buttonicon.css";

const ButtonIcon = ({ ...props }) => {
  return (
    <div className="ButtonIcon">
      <img
        className={props.style}
        id={props.buttonId}
        onClick={(e) => props.onSelect(e.target.id)}
        src={props.icon}
        alt={`Make ${props.buttonId} qr code`}
      />
    </div>
  );
};

export default ButtonIcon;
