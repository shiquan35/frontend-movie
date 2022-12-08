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

export function Main(props: IAppProps) {
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

  return (
    <>
      <div>This is Main page</div>
    </>
  );
}
