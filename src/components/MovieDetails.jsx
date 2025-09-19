import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const [moviesAllDetails, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const FetchDetails = async () => {
      setLoading(true);
      const Api_Key = import.meta.env.VITE_MOVIE_API_KEY;

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=${Api_Key}`
        );
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        alert("Error fetching movie details: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    FetchDetails();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-white text-lg">
        Loading movie details for {moviesAllDetails.Title || "..."}
      </p>
    );
  }

  if (!moviesAllDetails.Title) {
    return (
      <p className="text-center mt-10 text-white text-lg">Movie not found.</p>
    );
  }

  return (
    <div className=" bg-slate-900 text-white p-6 flex justify-center mt-12">
      <div className="flex flex-col md:flex-row bg-slate-800 rounded-xl shadow-lg overflow-hidden max-w-5xl w-full">
        {/* Poster */}
        <img
          src={moviesAllDetails.Poster}
          alt={moviesAllDetails.Title}
          className="md:w-1/2 w-full max-h-96 h-auto object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
        />

        {/* Movie Info */}
        <div className="flex flex-col justify-start md:w-1/2 p-6 gap-3">
          <h1 className="text-3xl font-bold">{moviesAllDetails.Title}</h1>
          <p className="text-gray-400 text-sm">
            {moviesAllDetails.Year} • {moviesAllDetails.Genre} •{" "}
            {moviesAllDetails.Runtime}
          </p>

          <p className="mb-2">
            <span className="font-semibold">IMDB Rating:</span> ⭐{" "}
            {moviesAllDetails.imdbRating}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {moviesAllDetails.Plot}
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold cursor-pointer transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
