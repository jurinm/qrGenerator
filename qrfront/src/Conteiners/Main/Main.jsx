import { useContext } from "react";

import { qrContext } from "../../store/store";

import "./main.css";

import { QrCode, Input } from "../../Components";

import Selector from "../Selector/Selector";

const Main = () => {
  const { setText, setBackground, setForeground, setDrawer, setPreset } =
    useContext(qrContext);

  return (
    <div className="App__main">
      <Input inputType={"text"} inputOnChange={setText} />
      <Input inputType={"color"} inputOnChange={setBackground}/>
      <Input inputType={"color"} inputOnChange={setForeground}/>
      <Selector />
      <QrCode />
    </div>
  );
};

export default Main;
