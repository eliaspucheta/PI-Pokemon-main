import { useEffect } from "react";
import styles from "./createpokemons.module.css";
import { useDispatch } from "react-redux";
import { getTypesAction } from "../../redux/pokemons/action";
import CreateForm from "../../components/createPokemon/CreateForm";

const CreatePokemonPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypesAction());
  }, [dispatch]);
  return (
    <div className={styles.pageCont}>
      <CreateForm />
    </div>
  );
};

export default CreatePokemonPage;
