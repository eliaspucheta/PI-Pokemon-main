/* eslint-disable react/prop-types */
import styles from "./subcomps.module.css";

const Range = ({ title, handleChange, value }) => {
  return (
    <div className={styles.rangeComp}>
      <label>{title}</label>
      <input
        title={value}
        name={title}
        onChange={handleChange}
        type="range"
        value={Number(value)}
        min={10}
        max={200}
      />
      <span>{value}</span>
    </div>
  );
};

export default Range;
