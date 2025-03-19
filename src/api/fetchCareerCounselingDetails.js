export default function handler(req, res) {
  const details = {
    title: "Career Counseling Services at Peregrine T&C",
    intro: "Embarking on a career journey can be both exciting and challenging. Peregrine T&C's Career Counseling Services are here to provide personalized guidance, helping you make informed decisions and achieve your professional aspirations.",
    sections: [
      {
        title: 'Why Seek Career Counseling?',
        type: 'list',
        className: 'benefits-list',
        items: [
          { title: 'Clarify Career Goals', description: 'Identify your strengths, interests, and values to choose a fulfilling career path.' },
          { title: 'Navigate Transitions', description: 'Receive support during career changes, whether it\'s entering the job market, switching fields, or advancing in your current role.' },
          { title: 'Enhance Job Search Strategies', description: 'Learn effective job hunting techniques, including resume building and interview preparation.' },
        ],
      },
      {
        title: 'Our Counseling Approach',
        type: 'list',
        className: 'approach-list',
        items: [
          { title: 'Personalized Assessments', description: 'Utilize tools and discussions to understand your unique skills and aspirations.' },
          { title: 'Goal Setting', description: 'Collaborate to define clear, achievable career objectives.' },
          { title: 'Ongoing Support', description: 'Benefit from continuous guidance, resources, and motivation throughout your career development process.' },
        ],
      },
      {
        title: 'Services Offered',
        type: 'list',
        className: 'services-list',
        items: [
          { title: 'One-on-One Counseling', description: 'Individual sessions tailored to your specific needs and goals.' },
          { title: 'Workshops and Seminars', description: 'Group sessions on various topics, including resume writing, interview skills, and job market trends.' },
          { title: 'Job Placement Assistance', description: 'Support in connecting with potential employers and job opportunities.' },
        ],
      },
      {
        title: 'Testimonials',
        type: 'testimonials',
        items: [
          { quote: 'The career counseling I received was transformative, providing clarity and direction that led to my dream job.', author: 'Past Client' },
          { quote: 'Peregrine T&C\'s team offered invaluable insights and support during my career transition.', author: 'Past Client' },
        ],
      },
    ],
  };

  res.status(200).json(details);
}