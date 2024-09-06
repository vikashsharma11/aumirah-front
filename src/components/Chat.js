import React, { useState, useEffect } from 'react';
import './Chat.css'; // Import the styles
import io from 'socket.io-client';

// Connect to backend using Socket.io (replace the URL with your backend's address)
const socket = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:4001');

function Chat() {
    const [messages, setMessages] = useState([]); // Empty message list
    const [input, setInput] = useState('');

    useEffect(() => {
        // Listen for incoming messages from the server (bot or user)
        socket.on('botMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: message }]);
        });

        // Cleanup the listener on component unmount
        return () => {
            socket.off('botMessage');
        };
    }, []);

    const handleSendMessage = () => {
        if (input.trim() === '') return; // Prevent sending empty messages

        // Send user message to the server
        socket.emit('userMessage', input);

        // Append user's message locally to the chatbox
        setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: input }]);

        // Clear the input field
        setInput('');
    };

    return (
        <div className="chat-container">
            {/* Chat Header */}
            <div className="chat-header">
                <div className="chat-header-info">
                    <img className="chat-avatar" src="https://i.imgur.com/7k12EPD.png" alt="Chat Avatar" />
                    <div>
                        <h3>Chat with Assistant</h3>
                        <p>We are online!</p>
                    </div>
                </div>
                <div className="chat-options">
                    <span>...</span>
                </div>
            </div>

            {/* Chat Messages */}
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

            {/* Chat Input */}
            <div className="input-box">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your message..."
                />
                <button onClick={handleSendMessage}>
                    <i className="send-icon">➤</i>
                </button>
            </div>
        </div>
    );
}

export default Chat;
