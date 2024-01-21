import React from "react";
import Link from "@/node_modules/next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Types
import { Genres } from "@/typing";

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GenreDropdown = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TBDM_API_KEY}`,
    },
    // ISR - Incremental Static Regeneration <- Caching request
    // When a request is made to a page that was pre-rendered at build time, it will initially show the cached page.
    // Any requests to the page after the initial request and before 10 seconds are also cached and instantaneous.
    // After the 10-second window, the next request will still show the cached (stale) page
    // Next.js triggers a regeneration of the page in the background.
    // Once the page generates successfully, Next.js will invalidate the cache and show the updated page. If the background regeneration fails, the old page would still be unaltered.
    next: {
      revalidate: 60 * 60 * 24, // Cache will invalide after 24 hrs
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDownIcon className="ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>

        <DropdownMenuSeparator />

        {data.genres.map((genre) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
