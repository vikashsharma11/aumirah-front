import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Chat from './components/Chat';
import './App.css';

function App() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleChatOpen = () => {
        setIsChatOpen(true);
    };

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
