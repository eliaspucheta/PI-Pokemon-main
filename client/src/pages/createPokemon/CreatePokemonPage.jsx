import { useEffect } from "react";
import styles from "./createpokemons.module.css";
import { useDispatch } from "react-redux";
import { getTypesAction } from "../../redux/pokemons/action";
import CreateForm from "../../components/createPokemon/createForm";

const CreatePokemonPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypesAction());
  }, []);
  return (
    <div className={styles.pageCont}>
      <CreateForm />
    </div>
  );
};

export default CreatePokemonPage;
