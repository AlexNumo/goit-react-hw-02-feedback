import React, { Component } from "react";

class FeadbackForm extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }



  // handleIncrement = evt => {
  //   console.log(this.state.good += 1);
  //   console.log(this.state.good.length);
  // };

  handleIncrement = evt => {
    let sum = this.state.good;
    console.log(sum);
    // console.log(this.state.good.length);
  };

  render() {
    return (
      <div>
          <form>
            <label>
              <h2>Please leave feedback</h2>
                <button type="button" onClick={this.handleIncrement}>Good</button>
                <button type="button" onClick={this.handleIncrement}>Neutral</button>
                <button type="button" onClick={this.handleIncrement}>Bad</button>
            </label>
          </form>
          <div>
            <h2>Statistics</h2>
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.good} </li>
              <li>Bad: {this.state.good}</li>
            </ul>
          </div>
      </div>
    );
  }
}


export default FeadbackForm;