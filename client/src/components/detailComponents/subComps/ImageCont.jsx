/* eslint-disable react/prop-types */
import styles from "./subcomps.module.css";

const ImageCont = ({ image, name, types, id }) => {
  const findTypeFire = types.find((el) => el.name === "fire");
  const findTypeWater = types.find((el) => el.name === "water");

  let bgImgDefiner = findTypeFire
    ? styles.bgImg1
    : findTypeWater
    ? styles.bgImg3
    : styles.bgImg2;
  return (
    <div className={`${styles.imageContainer} ${bgImgDefiner}`}>
      <span>{id}</span>
      <img src={image} alt={name} />
    </div>
  );
};

export default ImageCont;
