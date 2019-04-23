import React, { Component, Fragment } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </Fragment>
    );
  }
}

export default App;
