const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://admin.superauthenticate.com/admin-login",
        permanent: false,
        basePath: false,
      },
      {
        source: "/staff",
        destination: "https://admin.superauthenticate.com/login",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
