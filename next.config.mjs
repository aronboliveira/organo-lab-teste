/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["blog.organolab.com.br"],
  },
};
export default nextConfig;
