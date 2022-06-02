import { useState, useEffect, useCallback, Suspense, useContext } from "react";

import { FetchImage } from "../../Helpers/fetchImage";
import { QrCode, ButtonIcon, Input } from "../../Components";
import { Spiner } from "../../Components";
import "./main.css";
import { qrContext } from "../../store/store";

import { drawersNames, presetNames } from "../../consts";

const Main = ({}) => {
  const { setText, setBackground, setForeground, setDrawer, setPreset } =
    useContext(qrContext);

  return (
    <div className="App__main">
      <Input inputType={"text"} inputOnChange={setText} />
      <Input inputType={"color"} inputOnChange={setBackground}/>
      <Input inputType={"color"} inputOnChange={setForeground}/>
      <QrCode />
    </div>
  );
};

export default Main;
