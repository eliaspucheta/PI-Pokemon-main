import { Link } from "react-router-dom";
import styles from "./error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/error.gif" />
      <h6>Error 404 Not Found</h6>
      <Link to="/home">back home</Link>
    </div>
  );
};

export default ErrorPage;
