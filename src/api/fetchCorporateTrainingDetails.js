export default function handler(req, res) {
  const details = {
    title: "Corporate Training Programs at Peregrine T&C",
    intro: "Our corporate training programs are designed to provide expert guidance and support to help you achieve your business goals. Whether you're looking to improve operations, develop strategies, or navigate complex challenges, our team is here to assist you.",
    modules: [
      {
        title: 'Leadership Development',
        description: 'Enhance your leadership skills and learn to lead with confidence and effectiveness.',
      },
      {
        title: 'Team Building',
        description: 'Foster collaboration and improve team dynamics with our team-building workshops.',
      },
      {
        title: 'Digital Transformation',
        description: 'Leverage technology to drive business growth and stay competitive in the market.',
      },
    ],
    testimonials: [
      { quote: 'The corporate training provided by Peregrine T&C was instrumental in helping us achieve our business goals.', author: 'Business Client' },
      { quote: 'Their team offered invaluable insights and support during our digital transformation journey.', author: 'Business Client' },
    ],
  };

  res.status(200).json(details);
}

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