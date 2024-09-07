import React from 'react';
import './HomePage.css';
import Header from './Header'; 
import Footer from './Footer'; 
import Chat from './Chat';
import heroImage from './assets/heroImage.png';

function HomePage() {
    return (
        <div className="homepage">
            <Header />  {/* Use Header component */}

            <div className="hero-section">
                <div className="hero-image-container">
                    <img src={heroImage} alt="Chatbot" className="hero-image" />
                </div>
                <div className="hero-text">
                    <h2>Instant Conversations.</h2>
                    <p0>You can test it with given queries.</p0>
                    <p>1. hello</p>
                    <p>2. how are you</p>
                    <p>3. what is your name</p>
                    <p>4. what can you do</p>
                    <p>5. bye</p>
                </div>
            </div>

            <Chat />  {/* Chat component stays here */}

            <Footer />  {/* Use Footer component */}
        </div>
    );
}

export default HomePage;
