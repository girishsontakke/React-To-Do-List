import React from "react";
import "./styles.scss";
import Header from "./container/header/header.container";
import Main from "./container/main/main.container";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }
  onChange = (event) => {
    this.setState({ todo: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ todo: "" });
  };
  render() {
    return (
      <>
        <Header
          handleSubmit={this.handleSubmit}
          handleOnChange={this.onChange}
          value={this.state.todo}
          placeholder="Add items"
        />
        <Main />
      </>
    );
  }
}

export default App;
