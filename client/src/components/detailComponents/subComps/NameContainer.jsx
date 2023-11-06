/* eslint-disable react/prop-types */
import { FiEdit2 } from "react-icons/fi";
import styles from "./subcomps.module.css";

const NameContainer = ({ pokemon, edit, setEdit }) => {
  return (
    <div className={styles.nameDiv}>
      <h4>{pokemon.name}</h4>
      {isNaN(pokemon?.id) ? (
        <FiEdit2 onClick={() => setEdit(!edit)} className={styles.editIcon} />
      ) : null}
    </div>
  );
};

export default NameContainer;
