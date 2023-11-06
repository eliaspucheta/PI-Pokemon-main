import { useSelector } from "react-redux";
import styles from "./subcomps.module.css";

/* eslint-disable react/prop-types */
const TypesInput = ({ handleTypes, typesForm }) => {
  const types = useSelector((state) => state.types);

  return (
    <div className={styles.containerSelect}>
      <h5>types</h5>
      {types.length ? (
        <select
          className={styles.radioDiv}
          defaultValue={"default"}
          onChange={handleTypes}
        >
          <option disabled value={"default"}>
            select types
          </option>
          {types?.map((type) => (
            <option value={type.id} key={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      ) : null}
      <span>{typesForm?.length}/3</span>
    </div>
  );
};

export default TypesInput;
