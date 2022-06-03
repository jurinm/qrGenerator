import {useState} from 'react'

import "./buttonicon.css";

const ButtonIcon = ({ ...props }) => {

  return (
    <div className='ButtonIcon ' >
      <img
        className={props.selected === props.buttonId && "button-selected"}
        id={props.buttonId}
        onClick={(e) => props.iconOnClick(e.target.id)}
        src={props.icon}
        alt={`Make ${props.buttonId} qr code`}
      />
    </div>
  );
};

export default ButtonIcon;
