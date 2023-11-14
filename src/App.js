// import { useState } from "react";
import './App.css';
import Header from "./Components/Header";
import PopupTemplate from "./Components/PopupTemplate";

function App() {
  // const [user, setUser] = useState()

  return (
    <>
      <div className="modal">
        <PopupTemplate ></PopupTemplate>
      </div>
      <Header></Header>
      <div className="App">
        <h1>
          Meu primeiro app
        </h1>
        <p>
          Esta é a minha primeira aplicação React
        </p>

      </div>
    </>
  );
}

export default App;
