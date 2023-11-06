/* eslint-disable no-unused-vars */
import styles from "./homeComponents.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsAction } from "../../redux/pokemons/action";
import PokemonCard from "./subComps/pokemon/PokemonCard";
import Loader from "../loader/Loader";
import usePagination from "../../utils/customHooks/usePagination";
import Pagination from "./subComps/pokemon/Pagination";
import { useState } from "react";

const PokemonsContainer = () => {
  const [loader, setLoader] = useState(true);

  const { nextHandler, pokemons, prevHandler, count } = usePagination();
  const pokemonGlobal = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemonGlobal.length) {
      dispatch(getPokemonsAction()).then(() => {
        setLoader(false);
      });
    } else {
      setLoader(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.pokemonsCardsContainer}>
        {pokemons.length ? (
          pokemons?.map((el) => <PokemonCard key={el.id} pokemon={el} />)
        ) : (
          <Loader loader={loader} />
        )}
      </div>
      <Pagination nextFn={nextHandler} prevFn={prevHandler} pages={count} />
    </div>
  );
};

export default PokemonsContainer;
