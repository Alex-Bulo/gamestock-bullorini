import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GameStock: Videojuegos a tu alcance
        </p>
        <a
          className="App-link"
          href="https://github.com/Alex-Bulo/gamestock-bullorini.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Repo
        </a>
      </header>
    </div>
  );
}

export default App;
