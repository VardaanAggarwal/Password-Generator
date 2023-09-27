import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const passwordGenerator = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) {
      chars += "1234567890";
    }
    if (symbols) {
      chars += "!@#$%^&*()_+=-[]{}";
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };
  const handleNumberAllowed = () => {
    setNumbers((prev) => !prev);
  };
  const handleSymbolsAllowed = () => {
    setSymbols((prev) => !prev);
  };
  useEffect(() => {
    passwordGenerator(length);
  }, [numbers, symbols, length]);
  return (
    <>
      <h1>Password Generator</h1>
      <input
        type="text"
        name="pass"
        id="pass"
        value={password}
        onChange={(e) => {
          e.preventDefault();
        }}
      />
      <br />
      <br />
      <label htmlFor="numbers">Numbers</label>
      <input
        type="checkbox"
        name="numbers"
        id="numbers"
        onChange={handleNumberAllowed}
      />
      <br />
      <br />
      <label htmlFor="symbols">Symbols</label>
      <input
        type="checkbox"
        name="symbols"
        id="symbols"
        onChange={handleSymbolsAllowed}
      />
      <br />
      <br />
      <label htmlFor="range">Length : {length}</label>
      <br />
      <input
        type="range"
        name="range"
        id="range"
        value={length}
        min={8}
        max={20}
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
    </>
  );
}

export default App;
