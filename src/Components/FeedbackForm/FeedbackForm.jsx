import React, { Component } from "react";
// import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
// import Notification from "./Notification/Notification";

class FeedbackForm extends Component {
  static defaultProps = {
    positive: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };


  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback (good, neutral, bad) {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage(good, neutral, bad){
    const positive = Math.ceil(good / (good + neutral + bad) * 100);
    return positive;
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positive = this.countPositiveFeedbackPercentage(good, neutral, bad);
    this.onLeaveFeedback = total;
    return (
      <div>
        <FeedbackOptions
        handleGood={this.handleGood}
        handleNeutral={this.handleNeutral}
        handleBad={this.handleBad}
        />
        <div>
          <h2>Statistics</h2>
            {/* {!this.onLeaveFeedback && (
            <Notification
              message={"Для просмотра статистики, пожалуйста, поставьте отзыв"}
            />
            )}
            {!this.onLeaveFeedback && (
              <Statistics
              good = {good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
              />)} */}
        </div>
      </div>
    );
  }
}

export default FeedbackForm;