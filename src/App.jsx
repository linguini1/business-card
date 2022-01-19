// Imports
import React from "react"
import Heading from "./components/Heading"
import About from "./components/About"
import Contact from "./components/Contact"
import "./components/css/App.css"


// Main app
function App() {
  return (
    <div className="app">
      <div className="card">
        <Heading />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
