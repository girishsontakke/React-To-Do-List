import React from "react";
import "./styles.scss";
import Header from "./container/header/header.container";
import Main from "./container/main/main.container";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todos: [],
    };
  }
  onChange = (event) => {
    this.setState({ input: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      input: "",
      todos: [prevState.input, ...prevState.todos],
    }));
  };

  render() {
    return (
      <>
        <Header
          handleSubmit={this.handleSubmit}
          handleOnChange={this.onChange}
          value={this.state.input}
          placeholder="Add items"
        />
        <Main todos={this.state.todos} />
      </>
    );
  }
}

export default App;
