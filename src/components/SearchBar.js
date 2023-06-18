import { useState } from "react";
import '.././App.css'

function SearchBar({ onSubmit }) {
  const [neko, setName] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(neko);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input className="search_bar" onChange={handleChange} />
        <button className="btn-primary">Go!</button>
      </form>
    </div>
  );
}

export default SearchBar;
