import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('');

function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        socket.on('botMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'bot' }]);
        });
    }, []);

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
            socket.emit('userMessage', input);
            setInput('');
        }
    };

    return (
        <div className="app">
            <div className="chat-container">
                <div className="chat-box">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default App;
