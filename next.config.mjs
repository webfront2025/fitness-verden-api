/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'], // Tillad billeder fra localhost
      remotePatterns: [
        { protocol: 'http', hostname: '**' },
        { protocol: 'https', hostname: '**' }
      ]
    },
  };
 
  export default nextConfig;