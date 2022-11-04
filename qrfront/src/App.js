import { Navbar } from "./Components";
import { Main, Modal } from "./Conteiners";
import Router from "./Routes/Routes";
import "./App.css";


//TODO: add PWA

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router />
    </div>
  );
}

export default App;
