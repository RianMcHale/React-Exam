import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { getTopRatedMovies } from "../api/tmdb-api";

const TopRatedMovies = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovies
  });

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;

  console.log("Top rated movies data:", data);

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
    />
  );
};

export default TopRatedMovies;
