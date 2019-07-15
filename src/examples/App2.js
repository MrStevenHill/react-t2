import React from "react";
import Hello from "./Hello";
import NameInput from "./NameInput";
import "./App.css";

class App extends React.Component {
  state = {
    name: "Steve"
  };

  handleNameChange = event => this.setState({ name: event.target.value });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameInput name={this.state.name} onChange={this.handleNameChange} />
          <Hello name={this.state.name} />
        </header>
      </div>
    );
  }
}

export default App;
