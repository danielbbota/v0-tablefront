/** @type {import('next').NextConfig} */
const nextConfig = {
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
