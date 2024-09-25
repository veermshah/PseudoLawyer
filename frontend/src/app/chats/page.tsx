// src/app/chats/page.tsx

"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChatRow from "../components/ChatRow";
import ChatWindow from "../components/ChatWindow";  // Import ChatWindow component
import { v4 as uuidv4 } from 'uuid';

interface Chat {
    id: string;
    number: number;
    name: string;
    lastMessage: string;
    time: string;
}

export default function Chats() {
    const [chats, setChats] = useState<Chat[]>([
        {
            id: uuidv4(),
            number: 1,
            name: "Turk",
            lastMessage: "HI",
            time: "September",
        },
        {
            id: uuidv4(),
            number: 2,
            name: "Turk",
            lastMessage: "HI",
            time: "September",
        },
        {
            id: uuidv4(),
            number: 3,
            name: "Turk",
            lastMessage: "HI",
            time: "September",
        },
    ]);

    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);  // State to track selected chat

    // Function to handle creating a new chat
    const createNewChat = () => {
        const newChat = {
            id: uuidv4(),
            number: chats.length + 1,
            name: `New Chat ${chats.length + 1}`,
            lastMessage: "This is a new chat!",
            time: new Date().toLocaleString(),
        };
        setChats([...chats, newChat]);
        setSelectedChat(newChat);  // Automatically open the new chat
    };

    // Function to handle selecting an existing chat
    const selectChat = (chat: Chat) => {
        setSelectedChat(chat);
    };

    return (
        <div>
            <Navbar />

            {selectedChat ? (  // If a chat is selected, show the ChatWindow
                <div>
                    <ChatWindow />
                    <button
                        onClick={() => setSelectedChat(null)}  // Button to go back to chat list
                        className="mt-5 p-2 bg-red-500 text-white rounded"
                    >
                        Back to Chat List
                    </button>
                </div>
            ) : (
                <div className="mt-10 text-white text-3xl barlow-bold ">
                    <div>
                        <div className="grid grid-cols-4 gap-8 my-3 mx-16 items-center barlow-black">
                            <h1 className="text-left">Chat Number</h1>
                            <h1 className="text-left">Person</h1>
                            <h1 className="text-left">Last Message</h1>
                            <h1 className="text-right">Time Updated</h1>
                        </div>
                    </div>
                    <hr className="border-2 border-white" />

                    {chats.map((chat) => (
                        <div key={chat.id} onClick={() => selectChat(chat)}>
                            <ChatRow
                                number={chat.number}
                                name={chat.name}
                                lastMessage={chat.lastMessage}
                                time={chat.time}
                            />
                        </div>
                    ))}

                    <button
                        onClick={createNewChat}
                        className="mt-5 p-2 bg-blue-500 text-white rounded"
                    >
                        Create New Chat
                    </button>
                </div>
            )}
        </div>
    );
}
