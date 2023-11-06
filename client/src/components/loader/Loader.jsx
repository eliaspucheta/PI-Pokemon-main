/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./loader.module.css";

const Loader = ({ loader }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.cont}>
      {loader ? (
        <img src="/assets/loader1.gif" />
      ) : (
        <div className={styles.loaderDiv}>
          <img src="/assets/lost.gif" />
          <p onClick={() => navigate("/pokemon/create")}>
            Database pokemons is empty, please create one!
          </p>
        </div>
      )}
    </div>
  );
};

export default Loader;
