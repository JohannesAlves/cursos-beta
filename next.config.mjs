/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [
    {
      // matching all API routes
      source: '/api/:path*',
      headers: [
        { key: 'Access-Control-Allow-Credentials', value: 'true' },
        {
          key: 'Access-Control-Allow-Origin',
          value:
            'https://cursos-beta-4pb36vkor-johannes-projects-6f05f567.vercel.app',
        }, // replace this your actual origin
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET,DELETE,PATCH,POST,PUT',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value:
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        },
      ],
    },
  ],
};

export default nextConfig;
