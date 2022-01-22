import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({handleBtnClick, good, neutral, bad}) => (
    <form>
    <label>
      <button type="button" onClick={() => handleBtnClick(good)}>Good</button>
        <button type="button" onClick={() => handleBtnClick(neutral)}>Neutral</button>
        <button type="button" onClick={() => handleBtnClick(bad)}>Bad</button>
    </label>
  </form>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  handleBtnClick: PropTypes.func,
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
};