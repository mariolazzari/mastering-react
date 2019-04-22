import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
    //tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    //const { tags } = this.state;
    const { counter, onDelete } = this.props;

    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getCountClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
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

        {/*tags.length === 0 ? (
          <p>No items available</p>
        ) : (
          <ul>
            {tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
            )*/}
      </div>
    );
  }

  handleIncrement = () => this.setState({ value: this.state.value + 1 });

  getCountClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => (this.state.value === 0 ? "Zero" : this.state.value);
}

export default Counter;
