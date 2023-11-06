import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import Searchbar from "./subComps/Searchbar";
import BackBtn from "./subComps/BackBtn";
import { useLocation } from "react-router-dom";

const NavbarContainer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className={styles.navbarContainer}>
      <BackBtn />
      <img onClick={() => navigate("/home")} src="/assets/pokemon_logo.png" />
      {pathname === "/home" ? <Searchbar /> : null}
    </div>
  );
};

export default NavbarContainer;
