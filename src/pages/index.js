import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import axios from 'axios';

const HomePage = ({ details }) => {
  return (
    <>
      <Head>
        <title>Peregrine T&C - Empowering Global Citizens</title>
        <meta name="description" content="Peregrine T&C: Language training, internships, career counseling, and digital marketing services for global success." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <section id="our-story" className="content-section">
          <div className="container">
            <h2>Our Story</h2>
            <p>{details.story}</p>
            <CallToAction href="https://wa.me/917012756374" text="WhatsApp Us" />
            <button id="load-more-btn" className="button">Load More Details</button>
            <div id="more-details" style={{ display: 'none' }}></div>
          </div>
        </section>
        <section id="our-project" className="content-section">
          <div className="container">
            <h2>Our Project</h2>
            <p>{details.projectIntro}</p>
            <ul className="project-list">
              {details.projects.map((project, index) => (
                <li key={index}><strong>{project.title}:</strong> {project.description}</li>
              ))}
            </ul>
            <CallToAction href="#contact" text="Inquire Now" />
          </div>
        </section>
        <section id="our-services" className="content-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              {details.services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
            <CallToAction href="https://wa.me/917012756374" text="Instant Support" />
          </div>
        </section>
        <section id="our-clients" className="content-section">
          <div className="container">
            <h2>Our Clients</h2>
            <p>We're proud to have partnered with a diverse range of clients, including:</p>
            <div className="clients-grid">
              {details.clients.map((client, index) => (
                <div className="client" key={index}>
                  <img src={client.logo} alt={`${client.name} Logo`} className="client-logo" />
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center' }}><em>"Our clients are our best projects."</em></p>
          </div>
        </section>
        <section id="mission-motivation" className="content-section">
          <div className="container">
            <h2>Our Mission & Motivation</h2>
            <div className="mission">
              <h3>Our Mission</h3>
              <p>{details.mission}</p>
            </div>
            <div className="motivation">
              <h3>Our Motivation</h3>
              <p>{details.motivation}</p>
            </div>
            <div className="values">
              <h3>Our Values</h3>
              <p>What sets us apart? Our unwavering commitment to these core values:</p>
              <ul className="values-list">
                {details.values.map((value, index) => (
                  <li key={index}><span className="list-icon"><i className="fas fa-check-circle"></i></span> <strong>{value.title}:</strong> {value.description}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="news" className="content-section">
          <div className="container">
            <h2 className="section-title">News &amp; Updates</h2>
            <p>Stay tuned for the latest news and updates from Peregrine T&C!</p>
          </div>
        </section>
        <section id="contact" className="content-section">
          <div className="container">
            <h2>Work with Us</h2>
            <p>Ready to take your next step? Whether you're a student seeking career guidance, a professional looking to enhance your language skills, or a business in need of translation services, we're here to help.</p>
            <p>Let's collaborate and achieve great things together.</p>
            <div className="contact-info">
              <p><strong>Phone:</strong> +91 7012756374</p>
              <p><strong>Email:</strong> <a href="mailto:peregrine.contactus@gmail.com">peregrine.contactus@gmail.com</a></p>
              <p><strong>Email:</strong> <a href="mailto:peregrine.ptc@gmail.com">peregrine.ptc@gmail.com</a></p>
            </div>
          </div>
        </section>
        <section id="contact-form" className="content-section">
          <div className="container">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/fetchLandingPageDetails');
  const details = response.data;

  return {
    props: {
      details,
    },
  };
}

export default HomePage;