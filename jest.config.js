module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

peregrine-website
└── peregrine-website
|   ├── src
|       ├── components
|           ├── Header.js
|           ├── Footer.js
|           ├── ApplicationForm.js
|       ├── pages
|           ├── _app.js
|           ├── index.js
|           └── apply.js
|       ├── api
|           └── submitApplication.js
|   ├── public
|       ├── images
|       ├── favicon.ico
|       └── apple-touch-icon.png
|   ├── package.json
|   ├── next.config.js
|   ├── jest.config.js
|   ├── jest.setup.js
|   └── README.md
```
{
  "name": "peregrine-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest"
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