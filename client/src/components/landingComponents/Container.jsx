import HomeButton from "./HomeButton";
import Styles from "./LandingComponents.module.css";

const Container = () => {
  return (
    <div className={Styles.container}>
      <HomeButton />
    </div>
  );
};

export default Container;
