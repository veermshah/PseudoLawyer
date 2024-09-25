// src/components/ChatRow.tsx
import React from "react";

interface ChatRowProps {
    number: number;
    name: string;
    lastMessage: string;
    time: string;
}

export default function ChatRow(props: ChatRowProps) {
    return (
        <div>
            <hr className="bg-white border-2" />
            <div className="grid grid-cols-4 gap-8 my-3 mx-16 items-center">
                <h1 className="text-left">Chat {props.number}</h1>
                <h1 className="text-left">{props.name}</h1>
                <h1 className="text-left">{props.lastMessage}</h1>
                <h1 className="text-right">{props.time}</h1>
            </div>
        </div>
    );
}
