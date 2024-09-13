/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
        };
      }
      return config;
    },
    env: {
      API_URL: process.env.API_URL,
    },
  };
  
  export default nextConfig;