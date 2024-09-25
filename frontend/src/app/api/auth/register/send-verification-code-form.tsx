"use client";

import { handleSendEmailVerificationCode } from "@/lib/cognitoActions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./button";
import { motion } from "framer-motion";

export default function SendVerificationCode() {
    const [response, dispatch] = useFormState(handleSendEmailVerificationCode, {
        message: "",
        errorMessage: "",
    });
    const { pending } = useFormStatus();
    return (
        <>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                aria-disabled={pending}
                formAction={dispatch}
                className="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded-md w-full"
            >
                Resend Verification Code
            </motion.button>
            <div className="flex">
                {response?.errorMessage && (
                    <>
                        <p className="text-sm text-red-500">
                            {response.errorMessage}
                        </p>
                    </>
                )}
                {response?.message && (
                    <p className="text-sm text-green-500">{response.message}</p>
                )}
            </div>
        </>
    );
}
