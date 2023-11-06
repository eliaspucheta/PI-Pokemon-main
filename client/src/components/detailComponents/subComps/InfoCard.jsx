/* eslint-disable react/prop-types */
import { MdHealthAndSafety } from "react-icons/md";
import { GiPunchBlast } from "react-icons/gi";
import { BsSpeedometer2, BsShieldShaded } from "react-icons/bs";
import StatsGraph from "./statsGraph";
import styles from "./subcomps.module.css";

const InfoCard = ({ pokemon }) => {
  const statsArr = [
    {
      icon: <MdHealthAndSafety title="health" />,
      color: "#9bcc50",
      value: pokemon.hp,
    },
    {
      icon: <BsSpeedometer2 title="speed" />,
      color: "#fd7d24",
      value: pokemon.speed,
    },
    {
      icon: <GiPunchBlast title="attack" />,
      color: "#f16e57",
      value: pokemon.attack,
    },
    {
      icon: <BsShieldShaded title="defense" />,
      color: "#eed535",
      value: pokemon.defense,
    },
  ];

  return (
    <div className={styles.statsContainer}>
      {statsArr.length
        ? statsArr?.map((el) => (
            <StatsGraph
              key={el.color}
              icon={el.icon}
              color={el.color}
              value={el.value}
            />
          ))
        : null}
    </div>
  );
};

export default InfoCard;
