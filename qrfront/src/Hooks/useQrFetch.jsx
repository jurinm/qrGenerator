import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

import { endPoints } from "../consts";

export function useQrFetch() {
  const qrSettings = useSelector((state) => state.qr.qrSetting);
  let controller = new AbortController();
  const signal = controller.signal;
  const [fetchedImage, setFetchedImage] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      signal,
      text: qrSettings.text,
      background: qrSettings.backgroundColor,
      foreground: qrSettings.foregroundColor,
      drawer: qrSettings.drawer,
      preset: qrSettings.preset,
    }),
  };
  useEffect(() => {
    setIsFetching((newState) => (newState = true));
    fetch(`${endPoints.generator}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setFetchedImage((newState) => (newState = data.qrImage)))
      .catch((er) => console.log(er))
      .finally(() => setIsFetching((newState) => (newState = false)));
  
    return () => {
      controller.abort()
    }
  }, [qrSettings])
  
  
    
  return { isFetching, fetchedImage };
}
