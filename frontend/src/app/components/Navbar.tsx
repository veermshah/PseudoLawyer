"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoLogIn } from "react-icons/io5";
import useAuthUser from "../hooks/use-auth-user";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
    const router = useRouter();
    const user = useAuthUser();

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
                style={{ cursor: "pointer" }}
            >
                {user ? (
                    <MdAccountCircle
                        size={"4rem"}
                        className="hover:bg-white rounded-full"
                        onClick={() => {
                            router.push("/api/auth/profile");
                        }}
                    />
                ) : (
                    <IoLogIn
                        size={"4rem"}
                        className="hover:bg-white rounded-3xl pr-2"
                        onClick={() => {
                            router.push("/api/auth/login");
                        }}
                    />
                )}
            </motion.div>
        </div>
    );
}
