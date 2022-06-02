import { useContext, useState, useEffect, useCallback } from "react";

import { qrContext } from "../store/store";

export function useQrFetch() {
  const { qrSettings } = useContext(qrContext);
  const [fetchedImage, setFetchedImage] = useState();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: qrSettings.text,
      background: qrSettings.backgroundColor,
      foreground: qrSettings.foregroundColor,
      drawer: qrSettings.drawer,
      preset: qrSettings.preset,
    }),
  };
  const getQr = useCallback(async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/generate",
        requestOptions
      );
      const data = await response.json();
      setFetchedImage((newImage) => (newImage = data.qrImage));
    } catch (ex) {
      return console.error(ex);
    }
  }, [qrSettings, requestOptions]);

  useEffect(() => {
    getQr();
  }, [getQr]);

  return fetchedImage;
}
