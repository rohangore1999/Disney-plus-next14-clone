/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * whitelisting the image domain, so that we will tell Nextjs to optimize the images only for this domain
   */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "links.papareact.com" },
      { protocol: "http", hostname: "image.tmdb.org" },
    ],
  },
};

export default nextConfig;
