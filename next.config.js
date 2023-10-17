/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: "24",
            replaceAttrValues: {
              ["none"]: "currentColor",
              ["#000"]: "currentColor",
            },
            typescript: true,
            ext: "tsx",
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ["cdn.myanimelist.net"],
  },
};

module.exports = nextConfig;
