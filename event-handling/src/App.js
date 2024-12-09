import logo from "./logo.svg";
import "./App.css";

function App() {
  
  let count = 0;

  const increment = () => {
    count += 1;
    console.log(count);
  };

  return (
    <div className="App">
      <div style={{ fontSize: "25px", fontWeight: "bold", color: "magenta" }}>        {count}
      </div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
