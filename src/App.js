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
    <SearchEngine defaultKeyword="Serendipity" />
    </div>
  );
}

export default App;
