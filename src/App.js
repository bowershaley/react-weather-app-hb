import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Weather city="New York" />
        <footer className="text-center">
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
