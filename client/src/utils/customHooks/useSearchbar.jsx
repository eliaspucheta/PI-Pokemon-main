import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByNameAction } from "../../redux/pokemons/action";

const useSearchbar = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonByNameAction(value));
    setValue("");
  };

  return { value, handleSearch, handleSubmit };
};

export default useSearchbar;
