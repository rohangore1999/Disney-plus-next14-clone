import React from "react";
import { notFound } from "@/node_modules/next/navigation";

// Services
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import MoviesCarousel from "@/components/MoviesCarousel";

type Props = {
  params: {
    term: string;
  };
};

// By Default this component is server side component, so all console.logs will happend in terminal
const SearchPage = async ({ params: { term } }: Props) => {
  // NOTE: { term } refers to name of folder which you give search/[term]

  //  if the param not match, it will return 404 default page of nextjs
  if (!term) notFound;

  const termToUse = decodeURIComponent(term);

  // API call to get searched movies
  const movies = await getSearchMovies(termToUse);

  // API to call to get the popular movie
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>

        {/* AI Suggestions */}

        <MoviesCarousel title="Movies" movies={movies} isVertical />

        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
};

export default SearchPage;
