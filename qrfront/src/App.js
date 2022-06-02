import { Navbar } from "./Components";

import { Main } from "./Conteiners";

import QrProvider from "./store/QrProvider";

import "./App.css";

//TODO: add PWA

function App() {
  return (
    <div className="App">
      <QrProvider>
        <Main />
      </QrProvider>
    </div>
  );
}

export default App;
