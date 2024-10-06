import { useState } from "react";
import toast from "react-hot-toast";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      toast.error("Input search request!");
      return;
    }

    onSubmit(search);
  };

  return (
    <form onSubmit={submitForm} className={style.searchForm}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search for video"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={style.searchInput}
      />
      <button type="submit" className={style.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
