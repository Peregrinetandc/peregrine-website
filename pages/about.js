import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';
import ValueItem from '../components/ValueItem';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Peregrine T&C</title>
        <meta name="description" content="Learn about Peregrine T&C's mission, history, team, and values. We provide high-quality training and consulting services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="about-us" className="content-section">
          <div className="container">
            <h1 className="page-title">About Peregrine Technologies & Consulting</h1>
            <p className="intro-paragraph">
              Peregrine Technologies & Consulting is dedicated to providing high-quality training and consulting services to individuals and organizations around the world. We believe in empowering people through education and skill development, fostering global collaboration, and promoting career advancement.
            </p>
            <div className="info-block">
              <h2 className="section-title">Our Story</h2>
              <p>
                Founded in 2015, Peregrine T&C started with a vision to bridge the gap between education and employment in a globalized world. We began by offering [mention initial services - e.g., language courses], and have since expanded our services to include [mention current services - e.g., internships, career counseling, digital marketing], catering to a diverse clientele.
              </p>
              <p>
                Our team consists of experienced professionals with expertise in a wide range of fields. We are committed to delivering tailored solutions that meet the unique needs of each client, helping them achieve their goals and thrive in a competitive environment.
              </p>
            </div>
            <div className="info-block">
              <h2 className="section-title">Meet the CEO & Founder</h2>
              <div className="team-grid">
                <TeamMember
                  name="Muhammed Swalih T"
                  title="CEO & Founder"
                  imageSrc="/images/team-member-1.jpg"
                  bio="The founder of Peregrine T&C emerges as a visionary leader with a robust industrial background that spans the top FAANG companies. With hands-on experience at Facebook, Apple, Amazon, Netflix, and Google, their career is defined by groundbreaking innovations and strategic leadership in technology. This unique blend of deep industry expertise and a passion for transformative education fuels Peregrine’s mission to empower global talent, bridging cultural and professional gaps to unlock every individual’s potential."
                  linkedinUrl="https://www.linkedin.com/in/muhammed-swalih-t"
                />
                {/* Add more team members as needed */}
              </div>
            </div>
            <div className="info-block">
              <h2 className="section-title">Our Values</h2>
              <ul className="values-list">
                <ValueItem icon="fas fa-check-circle" title="Excellence" description="Strive for the highest standards in all our services." />
                <ValueItem icon="fas fa-check-circle" title="Integrity" description="Uphold ethical principles and build trust with clients." />
                <ValueItem icon="fas fa-check-circle" title="Collaboration" description="Foster partnerships and teamwork." />
                <ValueItem icon="fas fa-check-circle" title="Innovation" description="Embrace new ideas and adapt to change." />
                <ValueItem icon="fas fa-check-circle" title="Global Perspective" description="Promote cross-cultural understanding." />
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;