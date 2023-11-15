/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemonAction } from "../../redux/pokemons/action";

const intialState = {
  name: "",
  image: "",
  types: [],
  hp: 50,
  attack: 50,
  defense: 50,
  speed: 50,
  height: 50,
  weight: 50,
};

const useCreatePokemon = () => {
  const [pokemon, setPokemon] = useState(intialState);
  const [errors, setErrors] = useState(intialState);

  const dispatch = useDispatch();

  const validate = (poke) => {
    let validationErrors = {};
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const urlImageRegex = /\.(jpeg|jpg|gif|png|bmp)$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (poke.name.length < 3) validationErrors.name = "Name must be longer.";
    if (poke.name.length > 15) validationErrors.name = "Name is to long.";
    if (poke.name === poke.name.toUpperCase()) validationErrors.name = "Name contains all characters in uppercase."
    if (!nameRegex.test(poke.name))
      validationErrors.name = "name cannot have numbers or symbols.";
    if (!urlRegex.test(poke.image) || !urlImageRegex.test(poke.image))
      validationErrors.image = "Invalid image url.";
    if (poke.image.length === 0) validationErrors.image = "Invalid image.";
    if (poke.types.length === 0)
      validationErrors.types = "min types allowed 1.";
    if (poke.types.length > 3) validationErrors.types = "max types allowed 3.";
    return validationErrors;
  };

  const handleChange = (e) => {
    if (e.target.type === "range") {
      setPokemon({
        ...pokemon,
        [e.target.name]: Number(e.target.value),
      });
      setErrors(
        validate({
          ...pokemon,
          [e.target.name]: Number(e.target.value),
        })
      );
    } else {
      setPokemon({
        ...pokemon,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...pokemon,
          [e.target.name]: e.target.value,
        })
      );
    }
  };

  const handleImage = (image) => {
    setPokemon({ ...pokemon, image: `${image}` });
    setErrors(validate({ ...pokemon, image: `${image}` }));
  };

  const handleTypes = (e) => {
    
    const findType = pokemon.types.find((el) => el === e.target.value); //Number()
    if (!findType) {
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, e.target.value], //Number()
      });
      setErrors(
        validate({
          ...pokemon,
          types: [...pokemon.types, e.target.value], //Number()
        })
      );
    }
  };

  const handleDeleteOneType = (id) => {
    const filteredType = pokemon.types.filter((el) => el !== id);
    setPokemon({ ...pokemon, types: filteredType });
    setErrors(validate({ ...pokemon, types: filteredType }));
  };

  const handleReset = () => {
    setPokemon(intialState);
    setErrors(intialState);
  };

  const handleSubmit = () => {
    if (!Object.values(errors).length) {
      dispatch(createPokemonAction(pokemon));
      setPokemon(intialState);
    } else {
      setErrors(errors);
    }
  };

  return {
    handleChange,
    handleImage,
    handleSubmit,
    handleTypes,
    handleReset,
    handleDeleteOneType,
    pokemon,
    errors,
  };
};

export default useCreatePokemon;
