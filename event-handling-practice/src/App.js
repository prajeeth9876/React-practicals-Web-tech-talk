import logo from "./logo.svg";
import "./App.css";

function App() {
  const alertTit = () => alert("Tit Tat Tok");
  const alertTuk = () => alert("Tuk Tuk Tuk");
  return (
    <div className="App">
      <button className="btn" style={{ background: "red" }} onClick={alertTit}>
        Tit
      </button>
      <button className="btn" style={{ background: "green" }}
        onClick={alertTuk}
      >
        Tuk
      </button>
    </div>
  );
}

export default App;
