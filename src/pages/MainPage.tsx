import * as React from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { IndivMovie } from "./IndivMovie";

type MovieDetails = {
  name: string;
  productionYear: number;
  genre: string;
  synopsisShort: string;
  synopsis: string;
};

export function MainPage() {
  const [movieList, setMovieList] = React.useState<MovieDetails[]>([]);

  const [searchGenre, setSearchGenre] = React.useState<string>("");

  const [searchYear, setSearchYear] = React.useState<string>("");

  // API call
  React.useEffect(() => {
    axios
      .get(
        "https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies"
      )
      .then((res) => setMovieList(res.data))
      .catch((err) => console.log(err));
  }, []);

  // filter based on genre and year
  const displayMovies = movieList
    .filter((movie) => {
      if (searchGenre === "" && searchYear === "") {
        return movie;
      } else if (
        movie.genre.toLowerCase().includes(searchGenre.toLowerCase()) &&
        movie.productionYear.toString().includes(searchYear)
      ) {
        return movie;
      }
    })
    .map((movie, i) => {
      return (
        <Link to={`/movies/${movie.name}`} style={{ textDecoration: "none" }}>
          <div className="movie" key={i + 1}>
            <h2>{movie.name}</h2>
            <h3>{movie.productionYear}</h3>
            <h4>{movie.genre}</h4>
            <h5>{movie.synopsisShort}</h5>
          </div>
        </Link>
      );
    });

  return (
    <>
      <br />
      Filter by
      <br />
      Genre:{" "}
      <input
        type="text"
        placeholder="Genre"
        onChange={(event) => {
          setSearchGenre(event.target.value);
        }}
      />
      <br />
      Year:{" "}
      <input
        type="number"
        placeholder="Year"
        onChange={(event) => {
          setSearchYear(event.target.value);
        }}
      />
      <div className="displayContainer">{displayMovies}</div>
    </>
  );
}
