import React, { useState } from "react";
import { Button } from "./components/atoms/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);

  const inc2 = () => setCount(count + 2);

  const inc3 = () => setCount(count + 3);

  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const dec2 = () => {
    if (count > 0 && count > 1) {
      setCount(count - 2);
    }
    if (count === 1) {
      setCount(count - 1);
    }
  };

  const dec3 = () => {
    if (count > 0 && count > 1) {
      setCount(count - 3);
    }
    if (count === 1) {
      setCount(count - 1);
    }
    if (count === 2) {
      setCount(count - 2);
    }
  };

  const res = () => setCount(0);

  return (
    <div className="app">
      <header className="appHeader"></header>

      <main className="appMain">
        <div className="formBackground">
          <div className="counterArea">
            <Button type="submit" text=" -3 " variant="count" onClick={dec3} />
            <Button type="submit" text=" -2 " variant="count" onClick={dec2} />
            <Button type="submit" text=" -1 " variant="count" onClick={dec} />
            <div className="countDisplay">{count}</div>
            <Button type="submit" text=" +1 " variant="count" onClick={inc} />
            <Button type="submit" text=" +2 " variant="count" onClick={inc2} />
            <Button type="submit" text=" +3 " variant="count" onClick={inc3} />
          </div>
          <Button type="submit" text="Reset" variant="reset" onClick={res} />
        </div>
      </main>
      <footer className="appFooter"></footer>
    </div>
  );
}

export default App;
