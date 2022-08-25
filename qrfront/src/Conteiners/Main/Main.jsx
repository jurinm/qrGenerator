import styles from "./main.module.css";

import {useSelector, useDispatch} from 'react-redux';
import { setText, setBackground, setForeground } from "../../Components/QrCode/qrSlice";
import { QrCode, Input, Auth } from "../../Components";

import Selector from "../Selector/Selector";


const Main = () => {
  const qrSettings = useSelector((state) => state.qr.qrSetting);

  const dispatch = useDispatch()

  const userData = useSelector(state => state.auth);
  console.log(userData)
  console.log(qrSettings)

  return (
    <div className={styles.main}>
      <Input
        labelText={"Enter text to generate Your Qr code"}
        inputType={"text"}
        inputOnChange={(e) => dispatch(setText(e))}
        inputPlaceholder="URL or text"
      />
      <Input
        labelText={"Select background color"}
        inputType={"color"}
        inputOnChange={(e) => dispatch(setBackground(e))}
        isDisabled={qrSettings.preset && true}
        initialValue={qrSettings.backgroundColor}
      />
      <Input
        labelText={"Select code color"}
        inputType={"color"}
        inputOnChange={(e) => dispatch(setForeground(e))}
        isDisabled={qrSettings.preset && true}
        initialValue={qrSettings.foregroundColor}
      />
      <Selector />
      <QrCode />
    </div>
  );
};

export default Main;
