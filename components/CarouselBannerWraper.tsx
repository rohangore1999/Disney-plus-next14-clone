// Services
import { getDiscoverMovies } from "@/lib/getMovies";

// Components
import CarouselBanner from "./CarouselBanner";

type Props = {
  id?: string;
  keywords?: string;
};
async function CarouselBannerWraper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWraper;
