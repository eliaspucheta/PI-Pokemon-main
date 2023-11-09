import { AiOutlineReload } from "react-icons/ai";
import style from "./pokemon.module.css";
import { useDispatch } from "react-redux";
import { getPokemonsAction } from "../../../../redux/pokemons/action";

const ReloadBtn = () => {
  const dispatch = useDispatch();

  const handleBtn = () => {
    dispatch(getPokemonsAction());
  };

  return (
    <div className={style.reloadBtn}>

    <div onClick={handleBtn} className={style.reloadBtnContent}>
      <AiOutlineReload />
      <span>Reload</span>
    </div>
    </div>
  );
};

export default ReloadBtn;
