import logo from "./logo.svg";
import "./App.css";

function App() {
  function showAlert() {
    alert("Demonstrating Event Handling in React");
  }
  return (
    <div className="App">
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
}

export default App;
