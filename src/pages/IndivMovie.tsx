import * as React from "react";
import { useParams, useOutletContext } from "react-router-dom";

export interface IAppProps {}
type Context = {
  name: string;
  year: number;
  genre: string;
  synopsis: string;
};

export function IndivMovie(props: IAppProps) {
  const { id } = useParams();

  return (
    <>
      <div>Display Indiv</div>
    </>
  );
}
