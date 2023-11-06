import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from "./searchbar.module.css";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className={styles.backBtn}>
      <AiOutlineRollback />
      <span>Back</span>
    </div>
  );
};

export default BackBtn;
