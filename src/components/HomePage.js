import React from 'react';
import './HomePage.css';
import Chat from './Chat'; // Import the Chat component
import heroImage from './assets/heroImage.png';
import logoImage from './assets/logo.png'; // Import your logo image

function HomePage() {
    return (
        <div className="homepage">
            {/* Header with logo */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        {/* Logo on the left */}
                        <img src={logoImage} alt="Logo" className="logo" />
                        <div className="header-text">
                            <h1>Chatbot</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="hero-section">
                <div className="hero-image-container">
                    <img src={heroImage} alt="Chatbot" className="hero-image" />
                </div>
                <div className="hero-text">
                    <h2>Instant Conversations.</h2>
                    <p0>You can test it with given queries.</p0>
                    <p>1. hello</p>
                    <p>2. how are you</p>
                    <p>3. what's your name</p>
                    <p>4. what can you do</p>
                    <p>5. bye</p>
                    
                </div>
            </div>

            {/* Chatbox positioned in bottom-right */}
            <Chat />

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Chatbot Inc. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
