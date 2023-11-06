/* eslint-disable react/prop-types */
import styles from "./subcomps.module.css";

const Previsual = ({ pokemon }) => {
  const abilities = [
    {
      title: "hp",
      color: "#9bcc50",
      value: pokemon?.hp,
    },
    {
      title: "speed",
      color: "#fd7d24",
      value: pokemon?.speed,
    },
    {
      title: "attack",
      color: "#f16e57",
      value: pokemon?.attack,
    },
    {
      title: "defense",
      color: "#eed535",
      value: pokemon?.defense,
    },
  ];
  return (
    <div className={styles.previsualCont}>
      {pokemon?.image.length ? (
        <img src={pokemon?.image} alt={pokemon?.name} />
      ) : (
        <p id={styles.pSus}>selected image</p>
      )}
      <div className={styles.divsContainer}>
        <p className={styles.propName}>
          {pokemon?.name.length ? pokemon?.name.toUpperCase() : "pokemon name"}
        </p>
        <div className={styles.propDiv}>
          <p className={styles.propName}>weight: {pokemon?.weight}</p>
          <p className={styles.propName}>height: {pokemon?.height}</p>
        </div>
        {abilities.map((el) => (
          <div title={el.value} className={styles.abilitiesDiv} key={el.title}>
            <p>{el.title}</p>
            <div
              style={{
                background: `${el.color}`,
                height: "5px",
                width: `${el.value > 100 ? "100" : el.value}px`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Previsual;
