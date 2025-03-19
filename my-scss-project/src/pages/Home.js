import React from 'react';
import './_home.scss';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Our Website</h1>
                <p>Your journey to success starts here.</p>
                <Button label="Get Started" />
            </header>
            <main className="home-content">
                <section className="home-services">
                    <h2>Our Services</h2>
                    <div className="service-cards">
                        <Card title="Service 1" description="Description of service 1." />
                        <Card title="Service 2" description="Description of service 2." />
                        <Card title="Service 3" description="Description of service 3." />
                    </div>
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;