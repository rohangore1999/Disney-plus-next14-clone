import { notFound } from "@/node_modules/next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

// By Default this component is server side component, so all console.logs will happend in terminal
const SearchPage = ({ params: { term } }: Props) => {
  // NOTE: { term } refers to name of folder which you give search/[term]

  //  if the param not match, it will return 404 default page of nextjs
  if (!term) notFound;

  const termToUse = decodeURIComponent(term);

  // API call to get searched movies
  // API to call to get the popular movie

  return <div>Welcome to Search {termToUse}</div>;
};

export default SearchPage;
