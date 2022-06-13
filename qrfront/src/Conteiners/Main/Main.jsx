import { useContext } from "react";
import { AuthContext } from "../../store/store";
import { qrContext } from "../../store/store";

import styles from "./main.module.css";

import { QrCode, Input, Auth } from "../../Components";

import Selector from "../Selector/Selector";


const Main = () => {
  const { qrSettings, setText, setBackground, setForeground } =
    useContext(qrContext);
    
  const { userData } = useContext(AuthContext);
  console.log(userData)

  return (
    <div className={styles.main}>
      <Input
        labelText={"Enter text to generate Your Qr code"}
        inputType={"text"}
        inputOnChange={setText}
        inputPlaceholder="URL or text"
      />
      <Input
        labelText={"Select background color"}
        inputType={"color"}
        inputOnChange={setBackground}
        isDisabled={qrSettings.preset && true}
        initialValue={qrSettings.backgroundColor}
      />
      <Input
        labelText={"Select code color"}
        inputType={"color"}
        inputOnChange={setForeground}
        isDisabled={qrSettings.preset && true}
        initialValue={qrSettings.foregroundColor}
      />
      <Selector auth={userData.token}/>
      <QrCode />
    </div>
  );
};

export default Main;
