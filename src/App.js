import logo from "./logo.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import firebase from "./FirebaseConfig";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rogelio Alcala Ortiz</p>
      </header>
    </div>
  );
}

export default App;
