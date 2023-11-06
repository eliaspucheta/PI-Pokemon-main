/* eslint-disable react/prop-types */
import styles from "./subcomps.module.css";

const StatsGraph = ({ icon, value, color }) => {
  return (
    <div className={styles.graphDiv}>
      <span>{value}</span>
      <div
        className={styles.graph}
        title={value}
        style={{ height: `${value}px`, background: color }}
      ></div>
      {icon}
    </div>
  );
};

export default StatsGraph;
