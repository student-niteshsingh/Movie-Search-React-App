import { useState } from "react";

const SearchBar = ({ handleSubmitInput }) => {
  const [movieName, setMovieName] = useState("");

  const handleOnChange = (event) => {
    const movieName = event.target.value;

    setMovieName(movieName);
  };

  const handleOnClick = () => {
    handleSubmitInput(movieName);
    setMovieName("");
  };

  return (
    <div className="flex items-center justify-center gap-3 max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search movies..."
        className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleOnChange}
        value={movieName}
      />
      <button
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium cursor-pointer transition"
        onClick={handleOnClick}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
