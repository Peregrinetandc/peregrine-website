# Peregrine Website

## Overview
The Peregrine Website is a modern web application designed to provide a seamless user experience. It features a responsive design, interactive components, and robust form validation. The application is built using ES6 modules and follows best practices for maintainability and scalability.

## Project Structure
```
peregrine-website
├── src
│   ├── components
│   │   ├── header.js          # Manages header functionality and mobile menu
│   │   ├── slider.js          # Initializes and manages the image slider
│   │   └── formValidation.js   # Handles form submission and validation
│   ├── services
│   │   ├── api.js             # Functions for making API requests
│   │   └── helpers.js         # Utility functions for common tasks
│   ├── index.js               # Entry point for the application
│   └── types
│       └── index.js           # TypeScript interfaces for data structures
├── tests
│   ├── header.test.js         # Jest tests for the Header component
│   ├── slider.test.js         # Jest tests for the Slider component
│   └── formValidation.test.js  # Jest tests for the FormValidation component
├── package.json                # npm configuration file
├── jest.config.js             # Jest configuration settings
└── README.md                  # Project documentation
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd peregrine-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Run tests:**
   ```
   npm test
   ```

## Usage
- The header component provides navigation and mobile menu functionality.
- The slider component displays images with navigation controls.
- The form validation component ensures user inputs are validated before submission.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.