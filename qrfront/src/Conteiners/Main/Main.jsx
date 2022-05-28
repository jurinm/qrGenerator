import { useState, useEffect, useRef, useCallback } from "react";

import { FetchImage } from "../../Helpers/fetchImage";
import { Spiner, QrCode, ButtonIcon } from "../../Components";

import { drawersNames, presetNames } from "../../consts";

import {
  circle,
  gapped,
  horizontal,
  round,
  square,
  vertical,
  facebook,
  instagram,
  youtube,
  tictok,
  telegram,
  twitter,
} from "../../assets/img";

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

  const qrTypeSelectHandler = (e) => {
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
    <div className="App__input">
      <div className="App__input_control">
        <input
          className="App__input_control-text"
          type={type}
          placeholder={placeholder}
          onChange={(e) => setText((newText) => (newText = e.target.value))}
        />
        <div className="App__input_control-type">
          {Object.values(drawersNames).map((drawer) => {
            return (
              <ButtonIcon
                key={drawer.name}
                onSelect={qrTypeSelectHandler}
                icon={drawer.icon}
                buttonId={drawer.name}
                style={selectStyleHandler(drawer.name)}
              />
            );
          })}
        </div>
        <div className="App__input_control-preset">
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
      </div>
      <div className="App__input_image">
        <div className="App__input_image_colors">
          <input
            value={backgroundColor}
            type="color"
            disabled={preset && true}
            onChange={(e) =>
              setBackgroundColor((newColor) => (newColor = e.target.value))
            }
          />

          <input
            value={foregroundColor}
            type="color"
            onChange={(e) =>
              setForegroundColor((newColor) => (newColor = e.target.value))
            }
            disabled={preset && true}
          />
        </div>
        <QrCode image={qrImage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Main;
