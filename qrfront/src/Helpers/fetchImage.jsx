export async function FetchImage(text, backgroundColor, foregroundColor, drawer, preset) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text,
       background: backgroundColor,
        foreground: foregroundColor,
        drawer:  drawer,
        preset: preset}),
  };

  return fetch("http://127.0.0.1:5000/generate", requestOptions)
    .then((response) => response.json())
    .catch((ex) => console.log(ex));
}

//TODO: refactor arguments
