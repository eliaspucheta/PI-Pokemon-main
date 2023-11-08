/* eslint-disable react/prop-types */
import style from "./subcomps.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SelectedTypes = ({ pokemon, handleDelete }) => {
  const types = useSelector((state) => state.types);
  const [typesSelected, setTypesSelected] = useState([]);

  useEffect(() => {
    if (pokemon.types) {
      let findTypes = pokemon.types.map((el) =>
        types.find((type) => type.id === el) //Number()
      );
      setTypesSelected(findTypes);
    }
  }, [pokemon.types, types]);

  return (
    <div className={style.selectedTypesList}>
      {typesSelected.length > 0
        ? typesSelected.map((el) => (
            <div key={el.id}>
              <p>{el.name}</p>
              <span onClick={() => handleDelete(el.id)}>x</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default SelectedTypes;
