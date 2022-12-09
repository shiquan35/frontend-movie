import * as React from "react";
import axios from "axios";
import { useParams, useOutletContext } from "react-router-dom";

type MovieDetails = {
  name: string;
  productionYear: number;
  genre: string;
  synopsisShort: string;
  synopsis: string;
};

export function IndivMovie() {
  const [movieList, setMovieList] = React.useState<MovieDetails[]>([]);
  const { movieName } = useParams();

  React.useEffect(() => {
    axios
      .get(
        "https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies"
      )
      .then((res) => setMovieList(res.data))
      .catch((err) => console.log(err));
  }, []);

  // obtain movie details of specific movie by matching URL param and movie name
  const displayIndivMovie = movieList.find((movie) => movie.name === movieName);

  return (
    <>
      <div>
        <h1>{displayIndivMovie?.name}</h1>
        <h3>{displayIndivMovie?.productionYear}</h3>
        <h4>{displayIndivMovie?.genre}</h4>
        <p>{displayIndivMovie?.synopsis}</p>
      </div>
    </>
  );
}
