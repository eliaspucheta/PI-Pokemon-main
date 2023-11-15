import { useNavigate } from "react-router-dom";
import TypeSpan from "./TypeSpan";
import styles from "./pokemon.module.css";
import { CgTrash } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { deleteDbPokemonAction } from "../../../../redux/pokemons/action";

/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const uuidReg =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  const isDb = uuidReg.test(pokemon.id);

  return (
    <div className={styles.pokemonCard}>
      {isDb && (
        <CgTrash
          onClick={() => dispatch(deleteDbPokemonAction(pokemon.id))}
          className={styles.trash}
        />
      )}
      <img
        onClick={() => navigate(`/pokemon/${pokemon.id}`)}
        src={pokemon.image}
        alt={pokemon.name}
      />
      <div className={styles.infoCont}>
        <h5>{pokemon.name}</h5>
        <div className={styles.typesContainer}>
          {pokemon.types?.map((el) => (
            <TypeSpan key={Math.random()} type={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
