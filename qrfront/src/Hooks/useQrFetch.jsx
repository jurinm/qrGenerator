import { useContext, useState, useEffect } from "react";

import { qrContext } from "../store/store";

export function useQrFetch() {
  const { qrSettings } = useContext(qrContext);
  const [fetchedImage, setFetchedImage] = useState();
  const [isFetching, setIsFetching] = useState(true);
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

  useEffect(() => {
    setIsFetching((newState) => (newState = true));
    fetch("http://127.0.0.1:5000/generate", requestOptions)
      .then((response) => response.json())
      .then((data) => setFetchedImage((newState) => (newState = data.qrImage)))
      .catch((er) => console.log(er))
      .finally(() => setIsFetching((newState) => (newState = false)));
  }, [qrSettings]);
  return { isFetching, fetchedImage };
}