import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete } = this.props;

    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary sm-2"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger sm-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getCountClasses() {
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
