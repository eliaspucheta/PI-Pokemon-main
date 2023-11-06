/* eslint-disable react/prop-types */
import { useState } from "react";
import useValidateName from "../../../utils/customHooks/useValidateName";
import InfoCard from "./InfoCard";
import InfoHeader from "./InfoHeader";
import styles from "./subcomps.module.css";

const InfoContainer = ({ info, setPokemon }) => {
  const [edit, setEdit] = useState(false);

  const { errorName, errorValidate, setErrorName } = useValidateName();
  return (
    <div className={styles.infoContainer}>
      <div>
        {errorName.name && edit && (
          <p className={styles.error}>{errorName.name}</p>
        )}
        <InfoHeader
          edit={edit}
          setEdit={setEdit}
          errorValidate={errorValidate}
          errorName={errorName}
          setErrorName={setErrorName}
          pokemon={info}
          setPokemon={setPokemon}
        />
      </div>
      <InfoCard pokemon={info} />
    </div>
  );
};

export default InfoContainer;
