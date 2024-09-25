"use client";
import React from "react";
import { motion } from "framer-motion";
import useAuthUser from "../../../hooks/use-auth-user";
import { MdAccountCircle } from "react-icons/md";
import { FaArrowLeft, FaPowerOff } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import {
    handleConfirmUserAttribute,
    handleUpdateUserAttribute,
    handleSignOut,
} from "@/lib/cognitoActions";

export default function Profile() {
    const user = useAuthUser();
    const [status, dispatch] = useFormState(handleUpdateUserAttribute, "");
    const [status1, dispatch1] = useFormState(handleUpdateUserAttribute, "");
    const [status2, dispatch2] = useFormState(handleUpdateUserAttribute, "");
    const [confirmStatus, dispatchConfirm] = useFormState(
        handleConfirmUserAttribute,
        undefined
    );

    const router = useRouter();

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
                <h1 className="text-6xl text-white barlow-black ml-24">
                    PROFILE SETTINGS
                </h1>
                <form action={handleSignOut}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-secondary text-3xl rounded-full bg-white hover:text-secondary hover:bg-primary py-3 px-5 barlow-extrabold"
                    >
                        <div className="flex items-center gap-4">
                            <FaPowerOff />
                            <h1 className="mb-1">LOGOUT</h1>
                        </div>
                    </motion.button>
                </form>
            </div>
            {/* NAME */}
            <div className="bg-primary h-fit w-3/5 rounded-3xl mx-auto p-4">
                <h1 className="text-2xl text-white barlow-bold">NAME</h1>
                <form action={dispatch}>
                    <div className="flex items-center gap-3 mt-3 pr-5">
                        <MdAccountCircle size={50} className="text-white" />
                        <motion.input
                            id="name"
                            type="text"
                            name="name"
                            minLength={4}
                            placeholder="Enter your name"
                            required
                            defaultValue={user?.name}
                            className="rounded-3xl px-4 py-2 w-full bg-white text-secondary barlow-semibold text-2xl"
                        />
                    </div>
                    <div className="mt-4">
                        {status === "error" && (
                            <>
                                <p className="text-sm text-red-500">
                                    There was an error updating name.
                                </p>
                            </>
                        )}
                        {status === "success" && (
                            <p className="text-lg barlow-bold text-green-500">
                                NAME HAS BEEN UPDATED SUCCESSFULLY
                            </p>
                        )}
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-secondary text-3xl rounded-full bg-white hover:text-white hover:bg-black py-3 px-12 barlow-extrabold mt-4"
                    >
                        UPDATE
                    </motion.button>
                </form>
            </div>
            {/* Email */}
            <div className="bg-primary h-fit w-3/5 rounded-3xl mx-auto p-4">
                <h1 className="text-2xl text-white barlow-bold">EMAIL</h1>
                <form action={dispatch1}>
                    <div className="flex items-center gap-3 mt-3 pr-5">
                        <MdAccountCircle size={50} className="text-white" />
                        <motion.input
                            id="email"
                            type="email"
                            name="email"
                            minLength={4}
                            placeholder="Enter your email address"
                            required
                            defaultValue={user?.email}
                            className="rounded-3xl px-4 py-2 w-full bg-white text-secondary barlow-semibold text-2xl"
                        />
                    </div>
                    <div>
                        <input
                            id="current_email"
                            type="hidden"
                            name="current_email"
                            defaultValue={user?.email}
                        />
                    </div>
                    <div className="mt-4">
                        {status1 === "error" && (
                            <>
                                <p className="text-sm text-red-500">
                                    There was an error updating name.
                                </p>
                            </>
                        )}
                        {status1 === "success" && (
                            <p className="text-lg barlow-bold text-green-500">
                                EMAIL HAS BEEN UPDATED SUCCESSFULLY
                            </p>
                        )}
                    </div>
                    {status1?.includes("code") && (
                        <>
                            <div className="">
                                <motion.input
                                    id="code"
                                    type="text"
                                    name="code"
                                    placeholder="Enter code"
                                    required
                                    minLength={6}
                                    className="rounded-3xl px-4 py-2 w-2/3 bg-white text-secondary barlow-semibold text-2xl mt-1 ml-14"
                                />
                            </div>

                            <div
                                className=""
                                aria-live="polite"
                                aria-atomic="true"
                            >
                                {confirmStatus === "error" && (
                                    <>
                                        <p className="text-sm text-red-500">
                                            There was an error verifying your
                                            email
                                        </p>
                                    </>
                                )}
                                {confirmStatus === "success" && (
                                    <p className="text-lg barlow-bold text-green-500">
                                        EMAIL VERIFIED SUCCESSFULLY
                                    </p>
                                )}
                            </div>
                        </>
                    )}
                    <div className="mt-6 mb-2">
                        {status1?.includes("code") ? (
                            <VerifyButton dispatch={dispatchConfirm} />
                        ) : (
                            <UpdateButton />
                        )}
                    </div>
                </form>
            </div>
            {/* Birthday */}
            <div className="bg-primary h-fit w-3/5 rounded-3xl mx-auto p-4">
                <h1 className="text-2xl text-white barlow-bold">BIRTHDATE</h1>
                <form action={dispatch2}>
                    <div className="flex items-center gap-3 mt-3 pr-5">
                        <MdAccountCircle size={50} className="text-white" />
                        <motion.input
                            id="birthdate"
                            type="date"
                            name="birthdate"
                            minLength={4}
                            required
                            defaultValue={user?.birthdate}
                            className="rounded-3xl px-4 py-2 w-full bg-white text-secondary barlow-semibold text-2xl"
                        />
                    </div>
                    <div>
                        <input
                            id="current_birthdate"
                            type="hidden"
                            name="current_birthdate"
                            defaultValue={user?.birthdate}
                        />
                    </div>
                    <div className="mt-4">
                        {status2 === "error" && (
                            <>
                                <p className="text-sm text-red-500">
                                    There was an error updating name.
                                </p>
                            </>
                        )}
                        {status2 === "success" && (
                            <p className="text-lg barlow-bold text-green-500">
                                BIRTHDATE HAS BEEN UPDATED SUCCESSFULLY
                            </p>
                        )}
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-secondary text-3xl rounded-full bg-white hover:text-white hover:bg-black py-3 px-12 barlow-extrabold mt-4"
                    >
                        UPDATE
                    </motion.button>
                </form>
            </div>
            <div className="h-4"></div>
        </div>
    );
}

function UpdateButton() {
    const { pending } = useFormStatus();

    return (
        <motion.button
            aria-disabled={pending}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.9 }}
            className="text-secondary text-3xl rounded-full bg-white hover:text-white hover:bg-black py-3 px-12 barlow-extrabold"
        >
            UPDATE EMAIL
        </motion.button>
    );
}

function VerifyButton({ dispatch }: { dispatch: (payload: FormData) => void }) {
    const { pending } = useFormStatus();

    return (
        <motion.button
            aria-disabled={pending}
            formAction={dispatch}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.9 }}
            className="text-secondary text-3xl rounded-full bg-white hover:text-white hover:bg-black py-3 px-12 barlow-extrabold"
        >
            VERIFY EMAIL
        </motion.button>
    );
}
