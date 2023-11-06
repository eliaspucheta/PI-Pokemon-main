import { Link } from "react-router-dom";
import styles from "./create.module.css";
import { BiPlusCircle } from "react-icons/bi";

const CreatePkmBtn = () => {
  return (
    <Link to={"/pokemon/create"} className={styles.create}>
      <BiPlusCircle />
      <span>Create pokemon</span>
    </Link>
  );
};

export default CreatePkmBtn;
