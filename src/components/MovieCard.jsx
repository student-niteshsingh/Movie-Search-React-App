import { Link } from "react-router-dom";
import "./Message";
import Message from "./Message";

const MovieCard = ({ movieDetails }) => {
  if (movieDetails.length === 0) {
    return <Message />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12 max-w-7xl mx-auto">
      {movieDetails.map((movie, key) => (
        <Link to={`/movie/${movie.imdbID}`} key={key}>
          <div className="bg-slate-800 rounded-xl shadow-md overflow-hidden hover:scale-[1.03] hover:shadow-lg transition transform duration-200">
            <img
              src={movie.Poster}
              alt="Movie Poster"
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white truncate">
                {movie.Title}
              </h2>
              <p className="text-sm text-gray-400">{movie.Year}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default MovieCard;
