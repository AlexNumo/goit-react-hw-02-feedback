import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({handleBtnClick}) => (
    <form>
    <label>
      <button type="button" onClick={handleBtnClick}>good</button>
        <button type="button" onClick={handleBtnClick}>neutral</button>
        <button type="button" onClick={handleBtnClick}>bad</button>
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