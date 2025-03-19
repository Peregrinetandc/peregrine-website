export default function handler(req, res) {
  const details = {
    intro: "Peregrine T&C's Apprenticeship Programs are designed for individuals eager to learn while earning. By combining hands-on training with structured learning, apprentices gain comprehensive skills in their chosen fields.",
    sections: [
      {
        title: 'Benefits of Our Apprenticeship Programs',
        type: 'list',
        className: 'benefits-list',
        items: [
          { title: 'Earn While You Learn', description: 'Receive a stipend while acquiring valuable industry skills.' },
          { title: 'Structured Learning', description: 'Participate in a curriculum that balances practical work with theoretical knowledge.' },
          { title: 'Industry Recognition', description: 'Earn certifications that are recognized across various industries.' },
          { title: 'Career Advancement', description: 'Many apprentices transition into full-time roles within Peregrine T&C.' },
        ],
      },
      {
        title: 'Available Apprenticeship Roles',
        type: 'list',
        className: 'opportunities-list',
        items: [
          { title: 'Digital Marketing Apprentice', description: 'Learn to create and implement online marketing campaigns.' },
          { title: 'IT Support Apprentice', description: 'Provide technical assistance and support for our internal systems.' },
          { title: 'Sales Apprentice', description: 'Develop skills in sales strategies and customer relationship management.' },
        ],
      },
      {
        title: 'How to Apply',
        type: 'list',
        className: 'process-list',
        items: [
          { title: 'Application Submission', description: 'Fill out the online application and submit your resume.' },
          { title: 'Assessment', description: 'Participate in skills assessments and interviews.' },
          { title: 'Enrollment', description: 'Selected candidates will be enrolled in the apprenticeship program and assigned mentors.' },
        ],
      },
      {
        title: 'Success Stories',
        type: 'testimonials',
        items: [
          { quote: 'The apprenticeship program at Peregrine T&C equipped me with skills that led to a rewarding career in digital marketing.', author: 'Past Apprentice' },
          { quote: 'Starting as an apprentice, I now lead a team, all thanks to the comprehensive training provided.', author: 'Past Apprentice' },
        ],
      },
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