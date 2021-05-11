import logo from "./logo.png";
import './App.css';
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="dictionary-logo" alt="logo" />
        <h3>What word are you looking for?</h3>
      </header>
    <SearchEngine defaultKeyword="sunflower" />
    <footer>
      Open-source on <a href="https://github.com/GabrielaParedes27/dictionary-project.git"
      target="blank">GitHub</a> by <a href="https://www.linkedin.com/in/gabriela-paredes-314333180/"
      target="blank">Gabriela Paredes</a>
    </footer>
    </div>
  );
}

export default App;
