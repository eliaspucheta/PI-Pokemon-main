/* eslint-disable react/prop-types */
import styles from "./detail.module.css";
import ImageCont from "./subComps/ImageCont";
import InfoContainer from "./subComps/InfoContainer";
import { Link } from "react-router-dom";

const DetailContainer = ({ pokemon, setPokemon }) => {
  console.log(pokemon);
  return (
    <div className={styles.container}>
      <ImageCont
        image={pokemon.image}
        types={pokemon.types}
        name={pokemon.name}
        id={pokemon.id}
      />
      <Link to="/home">
        <button className={styles.btn}>Back</button>
      </Link>
      <InfoContainer info={pokemon} setPokemon={setPokemon} />
    </div>
  );
};

export default DetailContainer;
