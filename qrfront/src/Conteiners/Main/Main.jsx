import { useContext } from "react";

import { qrContext } from "../../store/store";

import "./main.css";

import { QrCode, Input, Auth } from "../../Components";

import Selector from "../Selector/Selector";

const Main = () => {
  const { qrSettings, setText, setBackground, setForeground, setDrawer, setPreset } =
    useContext(qrContext);

  return (
    <div className="App__main">
      <Input inputType={"text"} inputOnChange={setText} inputPlaceholder='Enter URL'/>
      <Input inputType={"color"} inputOnChange={setBackground} isDisabled={qrSettings.preset && true} initialValue={qrSettings.backgroundColor}/>
      <Input inputType={"color"} inputOnChange={setForeground} isDisabled={qrSettings.preset && true} initialValue={qrSettings.foregroundColor}/>
      <Selector />
      <QrCode />
      <Auth />
    </div>
  );
};

export default Main;
