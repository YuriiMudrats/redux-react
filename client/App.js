import React, { Component } from "react";
import Main from "./src/router";
import NavBar from "./src/components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
