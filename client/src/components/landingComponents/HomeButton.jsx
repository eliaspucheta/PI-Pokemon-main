import { Link } from "react-router-dom";
import Styles from "./LandingComponents.module.css";

const HomeButton = () => {
  return (
    <Link className={Styles.btn} to={"/home"}>
      <p>Lets Go!</p>
    </Link>
  );
};

export default HomeButton;
