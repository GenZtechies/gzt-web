/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.genztechies.com/",
    changefreq: "monthly",
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false
};
