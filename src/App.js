import "./App.css";
import { Button } from "./components/atoms/Button";
import { Input } from "./components/atoms/Input";

function App() {
  return (
    <div className="app">
      <header className="appHeader"></header>

      <main className="appMain">
        <div className="formBackground">
          <Input type="text" placeholder="E-mail" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Repeat password" />
          <Button
            type="submit"
            text="Send"
            variant="red"
            onClick={() => alert("Thanks for authorized")}
          />
        </div>
      </main>
      <footer className="appFooter"></footer>
    </div>
  );
}

export default App;
