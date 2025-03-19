import React from 'react';
import './_services.scss'; // Importing styles specific to the services page
import Navbar from '../components/Navbar'; // Importing the Navbar component
import Footer from '../layouts/Footer'; // Importing the Footer layout

const Services = () => {
    return (
        <div className="services-page">
            <Navbar />
            <main className="main-content">
                <h1 className="services-title">Our Services</h1>
                <p className="services-description">
                    We offer a wide range of services to meet your needs. Explore our offerings below.
                </p>
                {/* Add service cards or other components here */}
            </main>
            <Footer />
        </div>
    );
};

export default Services;