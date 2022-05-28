import { useState, useEffect } from "react";

import { FetchImage } from "../../Helpers/fetchImage";
import { QrCode, ButtonIcon, Input } from "../../Components";

import "./main.css";

import { drawersNames, presetNames } from "../../consts";

const Main = ({ props, type, placeholder }) => {
  const [qrImage, setQrImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [text, setText] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#F5F5F5");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [drawerType, setDrawerType] = useState("square");
  const [preset, setPreset] = useState(null);

  const fetchHandler = async (e) => {
    setIsLoading((status) => (status = true));
    setText((newText) => (newText = e));
    const response = await FetchImage(
      e,
      backgroundColor,
      foregroundColor,
      drawerType,
      preset
    );
    setIsLoading((status) => (status = false));
    setQrImage((newImage) => (newImage = response));
  };

  useEffect(() => {
    if (text) fetchHandler(text, backgroundColor, foregroundColor, drawerType);
  }, [text, backgroundColor, foregroundColor, drawerType, preset]);

  const backgroundColorHandler = (e) => {
    setBackgroundColor((current) => (current = e));
  };

  const drawerSelectHandler = (e) => {
    console.log(e);
    setDrawerType((newDrawer) => (newDrawer = e));
  };

  const presetSelectHandler = (e) => {
    console.log(e);
    if (preset === e) {
      setPreset((newPreset) => (newPreset = null));
    } else {
      setPreset((newPreset) => (newPreset = e));
    }
  };

  const selectStyleHandler = (id) => {
    return drawerType === id || preset === id
      ? "App_input_control-type_icon selected"
      : "App_input_control-type_icon";
  };

  return (
    <div className="App__main">
      <div className="App__main__inputs">
        <Input
          inputType="text"
          inputPlaceholder="URL"
          isDisabled={false}
          inputOnChange={fetchHandler}
        />
      </div>
      <div className="App__main__selector">
        {Object.values(drawersNames).map((drawers) => {
          return (
            <ButtonIcon
              key={drawers.name}
              onSelect={drawerSelectHandler}
              icon={drawers.icon}
              buttonId={drawers.name}
              style={selectStyleHandler(drawers.name)}
            />
          );
        })}
      </div>
      <div className="App__main__selector">
        {Object.values(presetNames).map((preset) => {
          return (
            <ButtonIcon
              key={preset.name}
              onSelect={presetSelectHandler}
              icon={preset.icon}
              buttonId={preset.name}
              style={selectStyleHandler(preset.name)}
            />
          );
        })}
      </div>

      <QrCode image={qrImage} isLoading={isLoading} />
    </div>
  );
};

export default Main;
