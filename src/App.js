import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container m-0">
        <h1>Weather App</h1>
        <footer>
          This website was coded by{" "}
          <a
            href="https://github.com/bowershaley"
            target="_blank"
            rel="noopener noreferrer"
          >
            Haley Bowers
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/bowershaley/react-weather-app-hb.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
