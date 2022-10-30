/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['i.scdn.co', 'mosaic.scdn.co', 'images.unsplash.com'],
  },
}
