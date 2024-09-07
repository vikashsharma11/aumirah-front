import React from 'react';
import logoImage from './assets/logo.png'; // Ensure the path is correct

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <img src={logoImage} alt="Logo" className="logo" />
                    <div className="header-text">
                        <h1>Chatbot</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
