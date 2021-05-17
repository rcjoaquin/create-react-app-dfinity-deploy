import logo from './logo.svg';
import dfinityLogo from './dfinity-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dfinityLogo} className="dfinity-logo" alt="logo" />
        +
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta aplicacion se ha deployado en Dfinity a traves de Fleek. Y lo he hecho yo. Erputoamo...
        </p>
        <a
          className="App-link"
          href="https://dfinity.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          aprende sobre Dfinity
        </a>
        <a
          className="App-link"
          href="https://fleek.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende sobre Fleek
        </a>
      </header>
    </div>
  );
}

export default App;
