import React, { useState } from "react";
import { sendMessageToAI } from "../api/chatApi/chatApi";

export default function ChatWindow() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ sender: string, message: string }[]>([]);

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        // Add the user's message to the chat history
        setChatHistory([...chatHistory, { sender: 'User', message }]);

        // Send the message to the backend and get the AI response
        try {
            const aiResponse = await sendMessageToAI(message);
            setChatHistory((prev) => [...prev, { sender: 'AI', message: aiResponse }]);
        } catch (error) {
            console.error("Error sending message:", error);
        }

        // Clear the input field
        setMessage('');
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`message ${chat.sender}`}>
                        <strong>{chat.sender}: </strong>{chat.message}
                    </div>
                ))}
            </div>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="chat-input"
            />
            <button onClick={handleSendMessage} className="send-button">Send</button>
        </div>
    );
}
