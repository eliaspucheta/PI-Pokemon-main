import Range from "./Range";
import styles from "./subcomps.module.css";

/* eslint-disable react/prop-types */
const RangeCont = ({ pokemon, handleChange }) => {
  const statsArr = [
    { title: "hp", value: pokemon.hp },
    { title: "speed", value: pokemon.speed },
    { title: "attack", value: pokemon.attack },
    { title: "defense", value: pokemon.defense },
    { title: "height", value: pokemon.height },
    { title: "weight", value: pokemon.weight },
  ];
  return (
    <div className={styles.rangeContainer}>
      {statsArr?.map((el) => (
        <Range
          key={el.title}
          handleChange={handleChange}
          value={Number(el.value)}
          title={el.title}
        />
      ))}
    </div>
  );
};

export default RangeCont;
