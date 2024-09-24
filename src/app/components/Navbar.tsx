"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoLogIn } from "react-icons/io5";

export default function Navbar() {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between text-3xl barlow-extrabold py-5 px-20 bg-primary ">
            <div className="flex gap-8">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }} // Duration in seconds
                    whileTap={{ scale: 0.9 }}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    <h1 className="rounded-3xl hover:bg-white hover:text-black px-3 py-2">
                        HOME
                    </h1>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }} // Duration in seconds
                    whileTap={{ scale: 0.9 }}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        router.push("/chats");
                    }}
                >
                    <h1 className="rounded-3xl hover:bg-white hover:text-black px-3 py-2">
                        CHATS
                    </h1>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }} // Duration in seconds
                    whileTap={{ scale: 0.9 }}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        router.push("/contracts");
                    }}
                >
                    <h1 className="rounded-3xl hover:bg-white hover:text-black px-3 py-2">
                        CONTRACTS
                    </h1>
                </motion.div>
            </div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:bg-white rounded-3xl pr-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                    router.push("/auth/login");
                }}
            >
                <IoLogIn size={"4rem"} />
            </motion.div>
        </div>
    );
}
