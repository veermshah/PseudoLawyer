import React from "react";
import Navbar from "../../../components/Navbar";

export default function Register() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl">Register</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="rounded-lg px-4 py-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="rounded-lg px-4 py-2"
                    />
                    <button className="bg-primary text-white rounded-lg px-4 py-2">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
