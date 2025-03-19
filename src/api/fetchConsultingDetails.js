export default function handler(req, res) {
  const details = {
    title: "Consulting Services at Peregrine T&C",
    intro: "Our consulting services are designed to provide expert guidance and support to help you achieve your business goals. Whether you're looking to improve operations, develop strategies, or navigate complex challenges, our team is here to assist you.",
    services: [
      {
        title: 'Business Strategy',
        shortDescription: 'Develop and implement effective business strategies.',
        description: 'Our business strategy consulting services help you develop and implement effective strategies to achieve your business goals. We work with you to identify opportunities, assess risks, and create a roadmap for success.',
      },
      {
        title: 'Operational Efficiency',
        shortDescription: 'Improve your business operations and increase efficiency.',
        description: 'Our operational efficiency consulting services focus on improving your business operations and increasing efficiency. We analyze your processes, identify areas for improvement, and implement solutions to streamline operations and reduce costs.',
      },
      {
        title: 'Digital Transformation',
        shortDescription: 'Leverage technology to drive business growth.',
        description: 'Our digital transformation consulting services help you leverage technology to drive business growth. We assist you in adopting new technologies, optimizing digital processes, and enhancing your digital capabilities to stay competitive in the market.',
      },
    ],
    testimonials: [
      { quote: 'The consulting services provided by Peregrine T&C were instrumental in helping us achieve our business goals.', author: 'Business Client' },
      { quote: 'Their team offered invaluable insights and support during our digital transformation journey.', author: 'Business Client' },
    ],
  };

  res.status(200).json(details);
}
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