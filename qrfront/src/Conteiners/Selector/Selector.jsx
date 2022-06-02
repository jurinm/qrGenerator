import { useContext } from "react";

import { qrContext } from "../../store/store";

import './selector.css'

import { drawersNames, presetNames } from "../../consts";

import { ButtonIcon } from "../../Components";


const Selector = () => {
  const { setDrawer, setPreset } =
    useContext(qrContext);
    
  return (
    <div className="Selector">
      <div className="Selector__drawers">
        {drawersNames.map((drawerName) => {
          return (
            <ButtonIcon key={drawerName.name} buttonId={drawerName.name} icon={drawerName.icon} onSelect={setDrawer}/>
          );
        })}
      </div>
      <div className="Selector__presets">
        {presetNames.map((presetName) => {
          return (
            <ButtonIcon key={presetName.name} buttonId={presetName.name} icon={presetName.icon} onSelect={setPreset}/>
          );
        })}
      </div>
    </div>
  );
};

export default Selector;
