import * as React from "react";
import axios from "axios";

type MovieDetails = {
  name: string;
  productionYear: number;
  genre: string;
  synopsisShort: string;
  synopsis: string;
};

export interface IAppProps {}

export function MainPage(props: IAppProps) {
  const [movieList, setMovieList] = React.useState<MovieDetails[]>([]);

  console.log(movieList);

  React.useEffect(() => {
    axios
      .get(
        "https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies"
      )
      .then((res) => setMovieList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const displayMovies = movieList.map((movie, i) => {
    return (
      <div className="movie" key={i + 1}>
        <h2>{movie.name}</h2>
        <h3>{movie.productionYear}</h3>
        <h4>{movie.genre}</h4>
        <h5>{movie.synopsisShort}</h5>
      </div>
    );
  });

  return (
    <>
      <div className="displayContainer">{displayMovies}</div>
    </>
  );
}
