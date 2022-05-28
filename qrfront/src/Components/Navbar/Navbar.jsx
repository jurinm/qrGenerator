import { logo } from "../../assets/img"
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='App__navbar'>
      <div className="App__navbar_logo">
        <img src={logo} alt="QR maker logo"/>
      </div>
      <div className="App__navbar_auth">
        auth
      </div>
    </nav>
  )
}

export default Navbar