const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  // Add more routes as needed
];

const disallowedRoutes = [
  '/admin/',
  '/login/',
  '/register/',
  // Add more disallowed routes as needed
];

const robotsTxtContent = `
# Allow all user agents to crawl the entire site
User-agent: *
Disallow:

# Disallow specific crawlers from accessing specific folders
User-agent: BadBot
Disallow: /private/
Disallow: /temp/

# Disallow all crawlers from accessing certain pages
User-agent: *
${disallowedRoutes.map(route => `Disallow: ${route}`).join('\n')}

# Allow Googlebot to access everything except the admin section
User-agent: Googlebot
Disallow: /admin/

# Sitemap location
Sitemap: https://www.peregrinetandc.info/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxtContent.trim());
console.log('robots.txt file has been generated.');

{
  "name": "peregrine-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build && npm run generate-robots-txt",
    "start": "next start",
    "test": "jest",
    "generate-robots-txt": "node scripts/generate-robots-txt.js"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "axios": "^0.24.0",
    "framer-motion": "^4.1.17"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "babel-jest": "^27.0.6"
  }
}