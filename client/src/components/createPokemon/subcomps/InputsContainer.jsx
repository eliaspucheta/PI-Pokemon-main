import RangeCont from "./RangeCont";
import styles from "./subcomps.module.css";

/* eslint-disable react/prop-types */
const InputsContainer = ({ handleChange, pokemon }) => {
  return (
    <div className={styles.inputsContainer}>
      <div className={styles.nameInput}>
        <label>name</label>
        <input
          name="name"
          onChange={handleChange}
          value={pokemon.name}
          autoComplete="off"
          placeholder="pokemon name"
        />
      </div>
      <div className={styles.nameInput}>
        <label>image</label>
        <input
          name="image"
          onChange={handleChange}
          value={pokemon.image}
          autoComplete="off"
          placeholder="image url"
        />
      </div>
      <RangeCont pokemon={pokemon} handleChange={handleChange} />
    </div>
  );
};

export default InputsContainer;
