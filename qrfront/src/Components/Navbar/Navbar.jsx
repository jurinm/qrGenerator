import { logo } from "../../assets/img"
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="QR maker logo"/>
      </div>
    </nav>
  )
}

export default Navbar