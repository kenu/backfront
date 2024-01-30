import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function getHello() {
    const greet = document.getElementById("greet");
    fetch("http://localhost:4000/api/hello")
      .then((response) => response.json())
      .then((data) => (greet.innerHTML = JSON.stringify(data)));
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(getHello);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          api called: <code id="greet"></code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
