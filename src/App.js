import logo from "./logo.svg";
import "./App.css";
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
