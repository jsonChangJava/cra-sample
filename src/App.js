import { useEffect, useState } from "react";
//外部套件
import axios from "axios";

import logo from "./assets/logo.svg";
import "./assets/App.css";
import Input from "./components/Input";
import "./assets/all.scss";

function App() {
  const [text, setText] = useState("initial");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          repellat cum dignissimos dolores distinctio voluptatum facilis
          reiciendis aspernatur in voluptatem quam, corporis doloribus nobis
          natus placeat, iure, quibusdam dolorum dolorem?
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">
          Primary
        </button>

        {text}
        <Input
          id="sampleText"
          text="這是一個input"
          value={text}
          onChangeHandler={onChangeHandler}
        />
      </header>
    </div>
  );
}

export default App;
