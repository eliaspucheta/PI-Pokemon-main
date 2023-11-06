import useSearchbar from "../../../utils/customHooks/useSearchbar";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./searchbar.module.css";

const Searchbar = () => {
  const { handleSearch, handleSubmit, value } = useSearchbar();
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleSearch}
        value={value}
        placeholder="Search pokemons!"
      />
      <button type="submit">
        <RiSearch2Line />
      </button>
    </form>
  );
};

export default Searchbar;
