/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rogerswildlife.org",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/how-to-help": 0.9,
      "/found-a-bird": 0.8,
      "/see-our-birds": 0.7,
      "/about": 0.6,
      "/contact-us": 0.6,
    };

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
