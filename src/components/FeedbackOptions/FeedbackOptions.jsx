import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            className={css.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
