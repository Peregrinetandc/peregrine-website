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