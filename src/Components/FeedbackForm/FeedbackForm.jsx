import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import PropTypes from "prop-types";
import Section from "./Section";

class FeedbackForm extends Component {
  static defaultProps = {
    initialValue: 0,
    onLeaveFeedback: false,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.bool.isRequired,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue
  }

handleBtnClick = event => {
   this.setState(prevState => {
     return { [event.target.textContent]: prevState[event.target.textContent] + 1 };
    })
  }

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
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            handleBtnClick={this.handleBtnClick}
          />
          </Section>
          <Section title={"Statistics"}>
            {total ? (
                <Statistics
                good = {good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positive}
                />) :
            <Notification
              message={"There is no feedback"}/>
             }
          </Section>
      </>);
  }
}

export default FeedbackForm;