import React, { useState, useEffect } from "react";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <h1>Snippet Collector</h1>
      {/* Render the SnippetList component with the snippets and event handlers */}
      <Hello person="World" />
    </div>
  );
}

export default App;
