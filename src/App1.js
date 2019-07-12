import React from "react";
import Hello from "./Hello";
import NameInput from "./NameInput";
import "./App.css";

function App() {
  const handleNameChange = event => console.log(event.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <NameInput name="Steve" onChange={handleNameChange} />
        <Hello name="Steve" />
      </header>
    </div>
  );
}

export default App;
