import React from 'react';
import ReactDOM from "react-dom"
import Weather from "./Weather";




import "./App.css";


function App() {
  return (
     <div className="container">
        <Weather defaultCity="Washington DC" />

        <footer>
          This project was coded by Stephanie Rubio
          and is <a
            href="https://github.com/StephanieR20/weather-react--app"
            target="_blank"
            rel="noopener noreferrer"
          >open-sourced on GitHub
          </a> and <a
            href="https://loving-elion-23678d.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >hosted on Netlify </a>
        </footer>
      </div>
   
  );
}

  

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
