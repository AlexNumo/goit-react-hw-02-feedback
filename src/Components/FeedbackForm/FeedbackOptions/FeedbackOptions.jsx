import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({handleGood, handleNeutral, handleBad }) => (
    <form>
    <label>
      <h2>Please leave feedback</h2>
        <button type="button" onClick={handleGood}>Good</button>
        <button type="button" onClick={handleNeutral}>Neutral</button>
        <button type="button" onClick={handleBad}>Bad</button>
    </label>
  </form>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNormal: PropTypes.func,
  onBad: PropTypes.func,
};