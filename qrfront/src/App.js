import { Auth, Navbar } from "./Components";

import { Main, Modal } from "./Conteiners";

import QrProvider from "./store/QrProvider";
import AuthProvider from "./store/AuthProvider";

import "./App.css";

//TODO: add PWA

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <QrProvider>
          <Navbar />
          <Main />
        </QrProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
