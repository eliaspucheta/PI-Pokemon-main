import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterFromApiOrDb,
  getTypesAction,
  orderAlfabeticAction,
  orderAttackAction,
  resetFiltersAction,
  filterByTypeAction,
} from "../../redux/pokemons/action";

const useSelectFilters = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({
    order: "default",
    api_db: "default",
    types: "default",
  });

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

  //? reset filters handler
  const handleResetFilters = () => {
    dispatch(resetFiltersAction());
    setStatus({
      order: "default",
      api_db: "default",
      types: "default",
    });
  };

  //? orders handler
  const handleAttackAndAzOrder = (e) => {
    //dispatch order by name and attack props
    if (e.target.value === "attackASC" || e.target.value === "attackDSC") {
      dispatch(orderAttackAction(e.target.value));
      setStatus({ ...status, order: e.target.value });
    } else {
      dispatch(orderAlfabeticAction(e.target.value));
      setStatus({ ...status, order: e.target.value });
    }
  };

  //? API or DB filter handler
  const handleFromApiOrDb = (e) => {
    dispatch(filterFromApiOrDb(e.target.value));
    setStatus({ ...status, api_db: e.target.value });
  };

  const handleFilterByType = (e) => {
    dispatch(filterByTypeAction(e.target.value));
    setStatus({ ...status, types: e.target.value });
  };

  return {
    handleAttackAndAzOrder,
    handleResetFilters,
    handleFromApiOrDb,
    handleFilterByType,
    status,
  };
};

export default useSelectFilters;
