import React, { Component, Fragment } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("reset");
  };

  render() {
    const { counters } = this.state;

    return (
      <Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset{" "}
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </Fragment>
    );
  }
}

export default Counters;
