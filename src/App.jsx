import { useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import LoadingSpinner from "./components/LoadingSpinner";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movieDetails, setMovieDetails] = useState([]);

  const [loading, setLoading] = useState(false);

  const SearcMovieDetails = async (name) => {
    setLoading(true);
    try {
      const ApiKey = import.meta.env.VITE_MOVIE_API_KEY;

      const response = await fetch(
        `https://www.omdbapi.com/?t=${name}&apikey=${ApiKey}`
      );

      if (!response.ok) {
        throw new Error("Movie not found! Please enter a valid Movie Name.");
      }

      const getDetails = await response.json();

      if (getDetails.Response === "False") {
        alert(getDetails.Error);
        return;
      }

      setMovieDetails((prevMovie) => [...prevMovie, getDetails]);
    } catch (error) {
      alert("Error while fetching Movie Details" + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitInput = (inputmovieName) => {
    SearcMovieDetails(inputmovieName);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white p-6">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar handleSubmitInput={handleSubmitInput} />
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <MovieCard movieDetails={movieDetails} />
                )}
              </>
            }
          ></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
