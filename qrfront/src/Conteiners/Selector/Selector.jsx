import { useContext, useState, useMemo, useCallback } from "react";

import { qrContext } from "../../store/store";

import styles from "./selector.module.css";

import { drawersNames, presetNames } from "../../consts";

import { ButtonIcon } from "../../Components";

const Selector = ({...props}) => {
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
    [selectPresetHandler, selectedPreset, props.auth]
  );

  const noAuth = () => {
    return (
      <div className="">
        <h2>Please sign in to use social media presets</h2>
      </div>
    )
  };


  return (
    <div className={styles.selector}>
      <div >
        {drawerMemo}
      </div>
      <div >
        {props.auth ? presetMemo : noAuth()}
      </div>
    </div>
  );
};

export default Selector;
