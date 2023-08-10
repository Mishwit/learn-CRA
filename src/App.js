import { Counter } from "./components/molecules/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main className="appMain">
        <div className="formBackground">
          <Counter />
        </div>
      </main>
    </div>
  );
}

export default App;
