// Components
import CarouselBannerWraper from "@/components/CarouselBannerWraper";
import MoviesCarousel from "@/components/MoviesCarousel";

// Services
import {
  getPopularMovies,
  getTopRatedNovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedNovies = await getTopRatedNovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      {/* CarouselBannerWraper */}
      <CarouselBannerWraper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedNovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
