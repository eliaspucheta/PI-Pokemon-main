/* eslint-disable react/prop-types */
import styles from "./subcomps.module.css";
//import { useState, useEffect } from "react";

const ImageCont = ({ image, name, types, id }) => {
   //console.log(image);
   //console.log(types);
  //  const [pokemonDetails, setPokemonDetails] = useState(null);
  //  const [loading, setLoading] = useState(true);
  //  const [error, setError] = useState(null);
 
   const findTypeFire = types && types.find((el) => el.name === "fire");
   const findTypeWater = types && types.find((el) => el.name === "water");
   
    let bgImgDefiner = findTypeFire
    ? styles.bgImg1
    : findTypeWater
    ? styles.bgImg3
    : styles.bgImg2;
  //let bgImgDefiner = styles.bgImg1
   return (
    //<div className={`${styles.imageContainer} ${bgImgDefiner}`}>
    <div className={`${styles.imageContainer} ${bgImgDefiner}`}>
      <span>{id}</span>
      <img src={image} alt={name} />
    </div>
  );
};

export default ImageCont;
