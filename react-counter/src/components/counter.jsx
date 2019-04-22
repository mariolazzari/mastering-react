import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    const { tags } = this.state;

    return (
      <Fragment>
        <span style={{ fontSize: 30 }} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary sm-2"
        >
          Increment
        </button>
        {tags.length === 0 ? (
          <p>No items available</p>
        ) : (
          <ul>
            {tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  }

  handleIncrement = () => this.setState({ count: this.state.count + 1 });
  getCountClasses() {
    const { count } = this.state;
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
