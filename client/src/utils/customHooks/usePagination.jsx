import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const usePagination = () => {
  const pokemonstate = useSelector((state) => state.pokemons);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(12);
  const [count, setCount] = useState(1);
  let pokemons = pokemonstate.slice(prev, next);
  const totalPages = Math.ceil(pokemonstate.length / 12); //total de paginas q va a tener mi pagination

  useEffect(() => {
    setPrev(0);
    setNext(12);
    setCount(1);
  }, [pokemonstate.length]);

  const prevHandler = () => {
    if (count > 1) {
      if (prev - 12 < 0) {
        setPrev(0);
        setNext(12);
      } else if (prev - 12 >= 0) {
        setPrev(prev - 12);
        setNext(next - 12);
      }
      setCount(count - 1);
    }
  };

  const nextHandler = () => {
    if (count < totalPages) {
      setNext(next + 12);
      setPrev(prev + 12);
      setCount(count + 1);
    }
  };

  return { prevHandler, nextHandler, pokemons, count };
};

export default usePagination;
