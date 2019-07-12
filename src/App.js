import React from "react";
import Hello from "./Hello";
import NameInput from "./NameInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameInput />
        <Hello name="Steve" />
      </header>
    </div>
  );
}

export default App;
