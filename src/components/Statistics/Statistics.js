import PropTypes from "prop-types";

import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  //   const { id, label, percentage } = stats;

  return (
    <>
      <h2>Statistics</h2>

      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li className={s.item} key={id}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Statistics;

// Statistics.defaultProps = {
//   title: "string",
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
