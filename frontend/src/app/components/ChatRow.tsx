"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useAuthUser from "../hooks/use-auth-user";
import { motion } from "framer-motion";

interface ChatRowProps {
    number: number;
    otherPersonEmail: string;
    lastMessage: string;
    time: string;
}

export default function ChatRow(props: ChatRowProps) {
    const router = useRouter();
    const user = useAuthUser();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Navigate to the chat window with the name and email as query params
        router.push(
            `/chats/chatwindowtest?userEmail=${encodeURIComponent(
                user?.email
            )}&otherPersonEmail=${encodeURIComponent(
                props.otherPersonEmail
            )}&youremail=${encodeURIComponent(user?.email)}`
        );
    };

    return (
        <div>
            <hr className="bg-white border-2 text-xl" />
            <motion.div
                whileHover={{ scale: 1.03, color: "#9C5959" }}
                transition={{ duration: 0.6 }}
                whileTap={{ scale: 0.9 }}
                className="grid grid-cols-4 gap-8 my-3 mx-16 items-center cursor-pointer"
                onClick={handleSubmit}
            >
                <h1 className="text-left">Chat {props.number}</h1>
                <h1 className="text-left">{props.otherPersonEmail}</h1>
                <h1 className="text-left">{props.lastMessage}</h1>
                <h1 className="text-right">{props.time}</h1>
            </motion.div>
        </div>
    );
}
