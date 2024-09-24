"use client";
import Navbar from "@/app/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import useAuthUser from "../../../hooks/use-auth-user";
import { MdAccountCircle } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Profile() {
    const user = useAuthUser();
    const router = useRouter();

    return (
        <div className="mt-16 flex flex-col gap-8">
            <div className="flex justify-between px-10">
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
                <h1 className="text-6xl text-white barlow-black text-center">
                    PROFILE SETTINGS
                </h1>
                <div></div>
            </div>

            <div className="bg-primary h-fit w-3/5 rounded-3xl mx-auto p-4">
                <h1 className="text-2xl text-white barlow-bold">NAME</h1>
                <div className="flex items-center gap-3 mt-3 pr-5">
                    <MdAccountCircle size={50} className="text-white" />
                    <motion.input
                        id="text"
                        type="text"
                        required
                        defaultValue={user?.name}
                        minLength={4}
                        className="rounded-3xl px-4 py-2 w-full bg-white text-black barlow-semibold text-2xl"
                    />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-black text-3xl rounded-full bg-white hover:text-white hover:bg-black py-3 px-12 barlow-extrabold mt-6"
                >
                    UPDATE
                </motion.button>
            </div>
            <div className="bg-primary h-fit w-3/5 rounded-3xl mx-auto p-4">
                <h1 className="text-2xl text-white barlow-bold">EMAIL</h1>
                <div className="flex items-center gap-3 mt-3 pr-5">
                    <MdAccountCircle size={50} className="text-white" />
                    <motion.input
                        id="email"
                        type="email"
                        required
                        defaultValue={user?.email}
                        minLength={4}
                        className="rounded-3xl px-4 py-2 w-full bg-white text-black barlow-semibold text-2xl"
                    />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-black text-3xl rounded-full bg-white hover:text-white hover:bg-black py-3 px-12 barlow-extrabold mt-6"
                >
                    UPDATE
                </motion.button>
            </div>
            <div className="bg-primary h-fit w-3/5 rounded-3xl mx-auto p-4">
                <h1 className="text-2xl text-white barlow-bold">BIRTHDATE</h1>
                <div className="flex items-center gap-3 mt-3 pr-5">
                    <MdAccountCircle size={50} className="text-white" />
                    <motion.input
                        id="date"
                        type="date"
                        required
                        defaultValue={user?.birthdate}
                        minLength={4}
                        className="rounded-3xl px-4 py-2 w-full bg-white text-black barlow-semibold text-2xl"
                    />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-black text-3xl rounded-full bg-white hover:text-white hover:bg-black py-3 px-12 barlow-extrabold mt-6"
                >
                    UPDATE
                </motion.button>
            </div>
        </div>
    );
}
