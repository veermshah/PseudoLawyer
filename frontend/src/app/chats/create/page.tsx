"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useAuthUser from "../../hooks/use-auth-user";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();
    const user = useAuthUser();
    const [otherPersonName, setOtherPersonName] = useState("");
    const [otherPersonEmail, setOtherPersonEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("create chat page");
        console.log("Creating chat with", otherPersonName, otherPersonEmail);
        console.log("Your name is", user?.name, "and your email is", user?.email);
        // Navigate to the chat window with the name and email as query params
        router.push(
            `/chats/chatwindow?otherPersonName=${encodeURIComponent(
                otherPersonName
            )}&otherPersonEmail=${encodeURIComponent(
                otherPersonEmail
            )}&yourname=${encodeURIComponent(
                user?.name
            )}&youremail=${encodeURIComponent(user?.email)}`
        );
    };

    return (
        <div className="mt-16 flex flex-col gap-8">
            <div className="flex justify-between px-10 items-center">
                <motion.div
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.6 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowLeft
                        size={50}
                        className="text-white cursor-pointer"
                        onClick={() => {
                            router.push("/");
                        }}
                    />
                </motion.div>
                <h1 className="text-6xl text-white barlow-black">
                    CREATE NEW CONTRACT CHAT
                </h1>
                <div></div>
            </div>
            {/* EMAIL */}
            <form onSubmit={handleSubmit}>
                <div className="bg-primary h-fit w-3/5 rounded-3xl mx-auto p-4">
                    <h1 className="text-2xl text-white barlow-bold mb-3">
                        WHO WOULD YOU LIKE TO DRAFT WITH?
                    </h1>
                    <motion.input
                        id="name"
                        type="text"
                        name="name"
                        minLength={4}
                        placeholder="Enter their full name"
                        required
                        className="rounded-3xl px-4 py-2 w-full bg-white text-secondary barlow-semibold text-2xl"
                        value={otherPersonName}
                        onChange={(e) => setOtherPersonName(e.target.value)} // Capture input value
                    />
                    <h1 className="text-2xl text-white barlow-bold mt-6 mb-3">
                        WHAT IS THEIR EMAIL?
                    </h1>
                    <motion.input
                        id="email"
                        type="email"
                        name="email"
                        minLength={4}
                        placeholder="Enter their email address"
                        required
                        className="rounded-3xl px-4 py-2 w-full bg-white text-secondary barlow-semibold text-2xl"
                        value={otherPersonEmail}
                        onChange={(e) => setOtherPersonEmail(e.target.value)} // Capture input value
                    />
                    <motion.button
                        type="submit" // Ensure the button is a submit button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-secondary text-3xl rounded-full bg-white hover:text-white hover:bg-black py-3 px-12 barlow-extrabold mt-8"
                    >
                        START CHAT
                    </motion.button>
                </div>
            </form>
            <div className="h-4"></div>
        </div>
    );
}
