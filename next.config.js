const ADMIN_REWRITE = {
  source: "/admin/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/admin/:path*"
      : "/admin/index.html",
};

module.exports = {
  images: {
    domains: [
      'pbs.twimg.com', // Twitter Profile Picture
    ],
  },
  rewrites: () => [ADMIN_REWRITE],
}
