import React, { useState, useEffect } from "react";
import WebSocketService from "../services/WebSocketService";
import Message from "./Message";
import MessageForm from "./MessageForm";

const ChatRoom = ({ room, onBack }) => {
    const [messages, setMessages] = useState([]);
    const socket = WebSocketService;

    useEffect(() => {
        socket.connect(room, (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    
        return () => socket.disconnect();
    }, [room]);

    const handleSendMessage = (content) => {
        const message = { sender: "User", content, room };
        socket.sendMessage(message);
    };

    return (
        <div>
            <button onClick={onBack}>Back to Rooms</button>
            <h2>Room: {room}</h2>
            <div>
                {messages.map((msg, index) => (
                    <Message key={index} {...msg} />
                ))}
            </div>
            <MessageForm onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatRoom;
