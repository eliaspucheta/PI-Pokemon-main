import { useSelector } from "react-redux";
import useSelectFilters from "../../../../utils/customHooks/useSelectFilters";
import styles from "./filters.module.css";
import CreatePkmBtn from "../../../createPokemonBtn/CreatePkmBtn";
import ResetFiltersBtn from "../resetBtn/ResetFiltersBtn";

const SelectFilters = () => {
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.backup);

  let typesSeparated = pokemons
    ?.map((pokemon) => pokemon.types?.map((el) => el.name))
    .flat();

  let filteredTypes = types.filter((type) =>
    typesSeparated.some((el) => el === type.name)
  );

  const {
    handleAttackAndAzOrder,
    handleFilterByType,
    status,
    handleResetFilters,
    handleFromApiOrDb,
  } = useSelectFilters();

  return (
    <div className={styles.filtersCont}>
      <div className={styles.container}>
        <span className={styles.orderby}>order by</span>
        {/* A-Z - ATTACK */}
        <select value={status.order} onChange={handleAttackAndAzOrder}>
          <option value={"default"} disabled>
            A-Z | -attack+
          </option>
          <option value={"aZ"}>A-Z</option>
          <option value={"zA"}>Z-A</option>
          <option value={"attackASC"}>Attack-asc</option>
          <option value={"attackDSC"}>Attack-des</option>
        </select>

        {/* API OR DB */}
        <select value={status.api_db} onChange={handleFromApiOrDb}>
          <option value="default" disabled>
            API | DB
          </option>
          <option value="api">API</option>
          <option value="db">Data Base</option>
        </select>
        {/* TYPE */}
        <select value={status.types} onChange={handleFilterByType}>
          <option value="default" disabled>
            types
          </option>
          {filteredTypes.length
            ? filteredTypes.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <div className={styles.btnsContainer}>
        <CreatePkmBtn />
        <ResetFiltersBtn resetFn={handleResetFilters} />
      </div>
    </div>
  );
};

export default SelectFilters;
