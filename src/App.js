import "./App.css";
import { useState } from "react";
import nekoData from "./api.js";
import DataList from "./components/DataList.js";
import SearchFrom from "./components/SearchFrom.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  const [nekos, setNekos] = useState([]);

  const handleSubmit = async (neko) => {
    const result = await nekoData(neko);
    return setNekos(result);
  };

  return (
    <div className="data-main">
      <div style={{marginRight: 50}}>
        <h2>Search for your taste!</h2>
        <SearchFrom />
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <div>
        <DataList nekos={nekos} />
      </div>
    </div>
  );
}

export default App;
