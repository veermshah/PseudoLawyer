"use client";

import { Button } from "../register/button";
import { useFormState, useFormStatus } from "react-dom";
import { handleSignIn } from "@/lib/cognitoActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function LoginForm() {
    const router = useRouter();

    const [errorMessage, dispatch] = useFormState(handleSignIn, undefined);
    return (
        <div className="relative h-screen">
            <img
                src="https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443471.jpg?t=st=1727200732~exp=1727204332~hmac=62e2a4be2caf3af4613a54ec95eb8e24a7130f772b95834527f49e24ba5f14bd&w=740"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="bg-white hover:blur-none rounded-3xl w-1/2 h-3/5 bg-opacity-95 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center px-24">
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
                <h2 className="text-5xl font-bold mb-12">Login</h2>
                <form action={dispatch} className="barlow-semibold text-white">
                    <motion.input
                        whileFocus={{
                            scale: 1.05,
                            backgroundColor: "#f0f0f0",
                            color: "#000000",
                        }}
                        className="bg-secondary rounded-md px-4 py-2 w-full"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                    <div className="mt-4">
                        <motion.input
                            whileFocus={{
                                scale: 1.05,
                                backgroundColor: "#f0f0f0",
                                color: "#000000",
                            }}
                            className="bg-secondary rounded-md px-4 py-2 mb-4 w-full"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            minLength={6}
                        />
                    </div>
                    <LoginButton />
                    <div className="flex justify-center">
                        <Link
                            href="/api/auth/register"
                            className="mt-2 cursor-pointer text-primary barlow-semibold text-xl"
                        >
                            {"Don't have an account? "} Register.
                        </Link>
                    </div>
                    <div className="flex h-8 items-end space-x-1">
                        <div
                            className="flex h-8 items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {errorMessage && (
                                <>
                                    <p className="text-sm text-red-500">
                                        {errorMessage}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-disabled={pending}
            className="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded-md w-full"
        >
            Login
        </motion.button>
    );
}
