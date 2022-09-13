import { useContext, useState, useMemo, useCallback } from "react";

import styles from "./selector.module.css";

import { drawersNames, presetNames } from "../../consts";

import { ButtonIcon } from "../../Components";

import {useDispatch} from 'react-redux'
import { setDrawer, setPreset } from "../../Components/QrCode/qrSlice";

const Selector = ({...props}) => {
  
  const dispatch = useDispatch()

  const [selectedDrawer, setSelectedDrawer] = useState("square");
  const [selectedPreset, setSelectedPreset] = useState("");

  const selectDrawerHandler = useCallback((e) => {
    if (selectedDrawer !== e) {
      setSelectedDrawer((newSelect) => (newSelect = e));
      dispatch(setDrawer(e));
    }
  }, [selectedDrawer])

  const selectPresetHandler = useCallback((e) => {
    if (selectedPreset === e) {
      setSelectedPreset((newSelect) => (newSelect = null));
      dispatch(setPreset(null));
    }
    if (selectedPreset !== e) {
      setSelectedPreset((newSelect) => (newSelect = e));
      dispatch(setPreset(e));
    }
  }, [selectedPreset])

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

  return (
    <div className={styles.selector}>
      <div >
        {drawerMemo}
      </div>
      <div >
        {presetMemo}
      </div>
    </div>
  );
};

export default Selector;
