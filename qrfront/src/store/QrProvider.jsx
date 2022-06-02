import { qrContext } from "./store";

import { useState, useReducer } from "react";

import reducer from "./reducer";

const QrProvider = ({ children }) => {
  const initialState = {
    text: "https://bit.ly/3wOViMn",
    backgroundColor: "#F5F5F5",
    foregroundColor: "#000000",
    drawer: "square",
    preset: null,
  };
  const [qrSettings, dispatch] = useReducer(reducer, initialState);

  const setText = (newText) => {
    dispatch({
      type: 'setText',
      payload: { ...qrSettings, 'text':newText  }
    });
    
  };

  const setBackground = (newBackground) => {
    dispatch({
      type: 'setBackground',
      payload: { ...qrSettings, 'backgroundColor':newBackground  }
    });
  };

  const setForeground = (newForeground) => {
    dispatch({
      type: 'setForeground',
      payload: { ...qrSettings, 'foregroundColor':newForeground  }
    });
  };

  const setDrawer = (newDrawer) => {
    dispatch({
      type: 'setBackground',
      payload: { ...qrSettings, 'drawer':newDrawer  }
    });
  };

  const setPreset = (newPreset) => {
    dispatch({
      type: 'setPreset',
      payload: { ...qrSettings, 'preset':newPreset  }
    });
  };

  return (
    <qrContext.Provider value={{ qrSettings, setText, setBackground,setPreset, setDrawer, setForeground }}>
      {children}
    </qrContext.Provider>
  );
};

export default QrProvider;
