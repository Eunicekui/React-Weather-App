import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{""}{" "}
        <a
          href="https://github.com/Eunicekui/React-Weather-App"
          target="_blank" rel="noreferrer"
        >
          Eunice Kamau
        </a>{" "}
        and is hosted on {""}{" "}
        <a
          href="https://react-weather-app-three-omega.vercel.app/"
          target="_blank" rel="noreferrer"
        >
          Vercel
        </a>
      </footer>
    </div>
  );
}

export default App;
