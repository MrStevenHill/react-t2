import React, { useState } from "react";
import Hello from "./Hello";
import NameInput from "./NameInput";
import "./App.css";

function App() {
  const [name, setName] = useState("Steve");

  return (
    <div className="App">
      <header className="App-header">
        <NameInput
          name={name}
          onChange={event => setName(event.target.value)}
        />
        <Hello name={name} />
      </header>
    </div>
  );
}

export default App;
