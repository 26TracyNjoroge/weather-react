import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
      <div className="App">
        <div className="container">
            <Weather defaultCity="Nairobi" />
            <footer>
              This project was coded by <a href="https://github.com/26TracyNjoroge" target="_blank" rel="noopener noreferrer">Tracy Njoroge</a> is <a href="https://github.com/26TracyNjoroge/weather-react" target="_blank" rel=" noopener noreferrer">open-sourced on GitHub </a> and is hosted on <a href="https://shecodes-weather-react.vercel.app/" target="_blank" rel="noopener noreferrer">Vercel</a>
            </footer>
        </div>
      </div>
  );
}
