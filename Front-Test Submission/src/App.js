import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function url_shortener(url) {
  const baseUrl = 'https://www.linkedin.com/in/yukeshwar-p-108478247/';
  trimurl = url.trim(); // Trim whitespace from the URL
  const urlHash = btoa(url); // Base64 encode the URL
  return `${baseUrl}${urlHash}`;
}

export default url_shortener;
// export default App;
