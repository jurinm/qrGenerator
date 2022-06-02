import { useContext, useState, useEffect } from "react";

import { qrContext } from "../store/store";

export function useFetchImage() {
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
  async function getQr() {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/generate",
        requestOptions
      );
      const data = await response.json();
      setFetchedImage((image) => (image = data.qrImage));
    } catch (ex) {
      return console.error(ex);
    }
  }

  useEffect(() => {
    console.log(qrSettings)
    getQr();
  }, [qrSettings]);

  return fetchedImage;
}
