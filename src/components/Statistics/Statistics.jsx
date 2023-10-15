import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.good}>Good: {good}</li>
      <li className={css.neutral}>Neutral: {neutral}</li>
      <li className={css.bad}>Bad: {bad}</li>
      <li className={css.total}>Total: {total}</li>
      <li className={css.percentage}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;
