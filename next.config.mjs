/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The table-reservations page became the restaurants business page.
      {
        source: '/:lang(en|de|pt|fr)/reservations',
        destination: '/:lang/restaurants',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/buildform',
        destination: '/buildform.html',
      },
    ]
  },
}

export default nextConfig
