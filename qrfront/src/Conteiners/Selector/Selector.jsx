import { useContext, useState, useMemo, useCallback } from "react";

import { qrContext } from "../../store/store";

import "./selector.css";

import { drawersNames, presetNames } from "../../consts";

import { ButtonIcon } from "../../Components";

const Selector = () => {
  const { setDrawer, setPreset } = useContext(qrContext);

  const [selectedDrawer, setSelectedDrawer] = useState("square");
  const [selectedPreset, setSelectedPreset] = useState("");

  const selectDrawerHandler = useCallback((e) => {
    if (selectedDrawer !== e) {
      setSelectedDrawer((newSelect) => (newSelect = e));
      setDrawer(e);
    }
  }, [selectedDrawer, setDrawer])

  const selectPresetHandler = useCallback((e) => {
    if (selectedPreset === e) {
      setSelectedPreset((newSelect) => (newSelect = null));
      setPreset(null);
    }
    if (selectedPreset !== e) {
      setSelectedPreset((newSelect) => (newSelect = e));
      setPreset(e);
    }
  }, [selectedPreset, setPreset])

  const drawerMemo = useMemo(
    () =>
      drawersNames.map((drawerName) => {
        return (
          <ButtonIcon
            key={drawerName.name}
            buttonId={drawerName.name}
            icon={drawerName.icon}
            iconOnClick={selectDrawerHandler}
            selected={selectedDrawer}
          />
        );
      }),
    [selectDrawerHandler, selectedDrawer]
  );

  const presetMemo = useMemo(
    () =>
    presetNames.map((presetName) => {
      return (
        <ButtonIcon
          key={presetName.name}
          buttonId={presetName.name}
          icon={presetName.icon}
          iconOnClick={selectPresetHandler}
          selected={selectedPreset}
        />
      );
    }),
    [selectPresetHandler, selectedPreset]
  );


  return (
    <div className="Selector">
      <div className="Selector__drawers">
        {drawerMemo}
      </div>
      <div className="Selector__presets">
        {presetMemo}
      </div>
    </div>
  );
};

export default Selector;
