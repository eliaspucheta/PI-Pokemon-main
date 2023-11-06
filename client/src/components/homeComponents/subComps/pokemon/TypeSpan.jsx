/* eslint-disable react/prop-types */
import Styles from "./pokemon.module.css";
import { defineColorType } from "../../../../utils/helper/typeColorDefiner";

const TypeSpan = ({ type }) => {
  const typestyle = defineColorType(Styles, type.name);

  return <span className={`${Styles.typeSpan} ${typestyle}`}>{type.name}</span>;
};

export default TypeSpan;
