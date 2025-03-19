module.exports = {
  siteUrl: 'https://peregrinetandc.info',
  generateRobotsTxt: true, // (optional)
  // Exclude specific routes from the sitemap
  exclude: ['/admin/*', '/login', '/register'],
  // Additional options
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'BadBot', disallow: ['/private/', '/temp/'] },
      { userAgent: '*', disallow: ['/admin/', '/login/', '/register/'] },
      { userAgent: 'Googlebot', disallow: ['/admin/'] },
    ],
    additionalSitemaps: [
      'https://peregrinetandc.info/sitemap.xml', // Add additional sitemaps if any
    ],
  },
};

{
  "name": "peregrine-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build && next-sitemap",
    "start": "next start",
    "test": "jest"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "axios": "^0.24.0",
    "framer-motion": "^4.1.17",
    "next-sitemap": "^1.6.0"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "babel-jest": "^27.0.6"
  }
}