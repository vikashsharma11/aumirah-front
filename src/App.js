import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Chat from './components/Chat';
import './App.css';
import { keepAlive } from './Utilities';

function App() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleChatOpen = () => {
        setIsChatOpen(true);
    };

    useEffect(() => {
        const url = "https://aumirah.onrender.com/api/ping"; // Replace with your backend URL

        // Ping the server every 5 minutes (300,000 ms = 5 minutes)
        const interval = setInterval(() => keepAlive(url), 10000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once when the component mounts


    return (
        <div className="app">
            {!isChatOpen ? (
                <HomePage onChatOpen={handleChatOpen} />
            ) : (
                <Chat />
            )}
        </div>
    );
}

export default App;
