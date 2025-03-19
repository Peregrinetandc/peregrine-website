export default function handler(req, res) {
  const details = {
    story: "Peregrine T&C was born from a passion for learning and a desire to empower individuals. We started as a small team with a big dream: to provide quality education and career guidance. Today, we've grown into a leading provider of language training, internship programs, and career counseling services. Our commitment to excellence and our dedication to our clients have fueled our growth. We're proud of what we've achieved, but we're even more excited about the future.",
    projectIntro: "We're passionate about empowering individuals and organizations. Our projects are designed to make a positive impact and drive innovation. Here's a glimpse of what we're working on:",
    projects: [
      { title: 'Internship Programs', description: 'Nurturing future leaders through hands-on experience.' },
      { title: 'Language Training', description: 'Bridging cultural gaps and fostering global communication.' },
      { title: 'Career Counselling', description: 'Guiding students towards fulfilling careers.' },
      { title: 'Digital Transformation', description: 'Helping businesses adapt to the digital age.' },
    ],
    services: [
      { title: 'Internship Programs', description: 'Gain practical experience and develop essential skills.', link: 'internship-programs.html', isNew: true },
      { title: 'Apprenticeship Programs', description: 'Immerse yourself in a structured learning environment.', link: 'apprenticeship-programs.html', isNew: true },
      { title: 'Language Training', description: 'Master foreign languages and improve your communication skills.', link: 'language-training.html' },
      { title: 'Translation Services', description: 'Accurate and professional translation services in multiple languages.', link: 'translation-services.html' },
      { title: 'Career Counseling', description: 'Receive expert guidance to achieve your career goals.', link: 'career-counseling.html' },
      { title: 'Digital Marketing Services', description: 'Enhance your online presence and attract more customers.', link: 'digital-marketing-services.html' },
    ],
    clients: [
      { name: 'MES Mampad College', logo: 'images/mes-logo.png' },
      { name: 'Iynul Marif Dars', logo: 'images/client2.png' },
      { name: 'Al Bayan Academy', logo: 'images/client3.png' },
      { name: 'Eduford', logo: 'images/client4.png' },
    ],
    mission: "To empower individuals and organizations to achieve their full potential through innovative language training, career guidance, and technology solutions.",
    motivation: "Our work is our passion. It's what drives us to strive for excellence and make a positive impact on the world. We're motivated by the opportunity to help individuals and organizations reach their full potential.",
    values: [
      { title: 'Integrity', description: 'We believe in honesty, transparency, and ethical conduct.' },
      { title: 'Excellence', description: 'We strive for excellence in everything we do.' },
      { title: 'Innovation', description: 'We embrace new ideas and technologies.' },
      { title: 'Collaboration', description: 'We work together to achieve common goals.' },
      { title: 'Customer Focus', description: 'We are dedicated to meeting the needs of our clients.' },
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