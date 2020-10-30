import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Xmas Wishlist</h1>
      </header>
      <Form setInputText={setInputText} />
      <List />
    </div>
  );
}

export default App;
