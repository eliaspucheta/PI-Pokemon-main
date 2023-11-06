import { useEffect } from "react";
import styles from "./detailPage.module.css";
import { useParams } from "react-router-dom";
import { getPokemonByIdReq } from "../../utils/helper/pokemonReq";
import { useState } from "react";
import DetailContainer from "../../components/detailComponents/DetailContainer";

const DetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const handleState = async (pokeId) => {
    const poke = await getPokemonByIdReq(pokeId);
    setPokemon(poke);
  };

  useEffect(() => {
    handleState(id);
  }, []);
  return (
    <div className={styles.container}>
      {pokemon ? (
        <DetailContainer pokemon={pokemon} setPokemon={setPokemon} />
      ) : null}
    </div>
  );
};

export default DetailPage;
