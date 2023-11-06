/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./pokemon.module.css";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ prevFn, nextFn, pages }) => {
  const pokemons = useSelector((state) => state.pokemons);
  let disabledStyle = pokemons.length ? null : styles.disabledPag;
  return (
    <div className={`${styles.paginationCont} ${disabledStyle}`}>
      <button id={styles.prev} onClick={prevFn}>
        <MdKeyboardDoubleArrowLeft />
      </button>
      <span>{pages}</span>
      <button id={styles.next} onClick={nextFn}>
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
