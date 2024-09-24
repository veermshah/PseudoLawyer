"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function Registration() {
    const router = useRouter();

    return (
        <div className="relative h-screen">
            <img
                src="https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443471.jpg?t=st=1727200732~exp=1727204332~hmac=62e2a4be2caf3af4613a54ec95eb8e24a7130f772b95834527f49e24ba5f14bd&w=740"
                alt=""
                className="absolute hover:blur-none blur-sm inset-0 w-full h-full object-cover"
            />
            <div className="bg-white hover:blur-none blur-sm rounded-3xl w-1/2 h-3/5 bg-opacity-95 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center px-24">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-8 left-8 cursor-pointer"
                    onClick={() => router.back()}
                >
                    <FaArrowLeft size={36} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-8 right-8 cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    <FaHome size={36} />
                </motion.div>
                <h2 className="text-5xl font-bold mb-12">Register</h2>
                <motion.input
                    whileFocus={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                    type="text"
                    placeholder="Username"
                    className="bg-secondary rounded-md px-4 py-2 mb-4 w-full"
                />
                <motion.input
                    whileFocus={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                    type="email"
                    placeholder="Email"
                    className="bg-secondary rounded-md px-4 py-2 mb-4 w-full"
                />
                <motion.input
                    whileFocus={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                    type="password"
                    placeholder="Password"
                    className="bg-secondary rounded-md px-4 py-2 mb-4 w-full"
                />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded-md w-full"
                >
                    Register
                </motion.button>
                <h1 className="mt-5 font-bold text-xl">
                    Already have an account? Click{" "}
                    <span
                        className="underline text-blue-500 cursor-pointer"
                        onClick={() => router.push("/api/auth/login")}
                    >
                        here
                    </span>
                </h1>
            </div>
        </div>
    );
}
