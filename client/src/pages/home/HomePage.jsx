/* eslint-disable no-unused-vars */
import Styles from "./homePage.module.css";
import PokemonsContainer from "../../components/homeComponents/pokemonsContainer";
import SelectFilters from "../../components/homeComponents/subComps/filters/SelectFilters";
import { Link } from "react-router-dom";
import ReloadBtn from "../../components/homeComponents/subComps/pokemon/ReloadBtn";
import HomeBtn from "../../components/homeComponents/subComps/btn/HomeBtn";

const HomePage = () => {
  return (
    <div className={Styles.container}>
      <ReloadBtn />
      <SelectFilters />
      <PokemonsContainer />
      <Link to={"https://github.com/eliaspucheta"} target="_blank">
        <img id={Styles.gif} src="/assets/chill.gif" />
      </Link>
    </div>
  );
};

export default HomePage;
