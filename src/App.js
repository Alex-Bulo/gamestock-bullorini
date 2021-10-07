import logo from './assets/images/logo.svg';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {


  return (
    <div className="App">
      <NavBar categories={['Acción', 'Deportes', 'Carreras']} />
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
