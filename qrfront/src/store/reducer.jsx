import { use } from "react";

const reducer = (state, action) => {
  if (action.type === "setText") {
    return { ...state, text: action.payload.text };
  }
  if(action.type === 'setBackground'){
      return {...state, backgroundColor: action.payload.backgroundColor}
  }
  if(action.type === 'setForeground'){
      return {...state, foregroundColor: action.payload.foregroundColor}
  }
  if(action.type === 'setDrawer'){
      return {...state, drawer: action.payload.drawer}
  }
  if(action.type === 'setPreset'){
      return {...state, preset: action.payload.preset}
  }
};

export default reducer;
