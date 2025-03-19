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
    "framer-motion": "^4.1.17",
    "chart.js": "^3.6.0"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "babel-jest": "^27.0.6"
  }
}

export default function handler(req, res) {
  const details = {
    title: "Digital Marketing Services at Peregrine T&C",
    intro: "In today's digital landscape, a strong online presence is no longer optional—it's essential for business success. Peregrine T&C's Digital Marketing Services are designed to elevate your brand, engage your target audience, and drive measurable results.",
    benefits: [
      { title: 'Proven Expertise', description: 'Our team stays ahead of trends, implementing cutting-edge, proven strategies.' },
      { title: 'Customized Strategies', description: 'We tailor our approach to align with your unique business goals.' },
      { title: 'Data-Driven Decisions', description: 'Every strategy is backed by analytics for effective, optimized results.' },
      { title: 'Comprehensive Solutions', description: 'We offer a full spectrum of integrated digital marketing services.' },
      { title: 'Transparent Reporting', description: 'Get clear, concise reports with actionable insights.' },
    ],
    services: [
      { title: 'Search Engine Optimization (SEO)', description: 'Boost your website’s visibility on Google and drive organic traffic.' },
      { title: 'Social Media Marketing (SMM)', description: 'Engage with your audience on Facebook, Instagram, Twitter, and LinkedIn.' },
      { title: 'Content Marketing', description: 'Establish authority with high-quality blogs, articles, videos, and infographics.' },
      { title: 'Paid Advertising (PPC)', description: 'Run targeted ads on Google and social media for instant results.' },
      { title: 'Email Marketing', description: 'Build customer relationships through personalized email campaigns.' },
      { title: 'Web Design & Development', description: 'Create visually stunning, high-performance websites for better conversions.' },
    ],
    testimonials: [
      { quote: 'Peregrine T&C transformed our online presence. Our website traffic and leads have increased significantly.', author: 'Client A' },
      { quote: 'Their social media expertise helped us build a strong community and engage with our target audience.', author: 'Client B' },
    ],
    chartData: {
      labels: ['SEO', 'SMM', 'Content Marketing', 'PPC', 'Email Marketing', 'Web Design'],
      values: [85, 90, 75, 80, 70, 95],
    },
  };

  res.status(200).json(details);
}