/* eslint-disable no-unused-vars */
import Styles from "./homePage.module.css";
import PokemonsContainer from "../../components/homeComponents/pokemonsContainer";
import SelectFilters from "../../components/homeComponents/subComps/filters/SelectFilters";
import { Link } from "react-router-dom";
import ReloadBtn from "../../components/homeComponents/subComps/pokemon/ReloadBtn";

const HomePage = () => {
  return (
    <div className={Styles.container}>
      <ReloadBtn />
      <SelectFilters />
      <PokemonsContainer />
      <Link to={"https://linktr.ee/rodrigospano"} target="_blank">
        <img id={Styles.gif} src="/assets/chill.gif" />
      </Link>
    </div>
  );
};

export default HomePage;
