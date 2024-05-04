/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/privacy-policy",
        destination:
          "https://github.com/zuedev/area96.digital/blob/main/documentation/privacy-policy.md",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination:
          "https://github.com/zuedev/area96.digital/blob/main/documentation/terms-of-service.md",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
