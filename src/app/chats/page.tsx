import React from "react";
import Navbar from "../components/Navbar";
export default function Chats() {
    return (
        <div>
            <Navbar />
            <div className="mt-10 text-white text-3xl barlow-bold ">
                <hr className="bg-white border-2" />
                <div className="flex items-center gap-8 my-3 mx-16">
                    <h1>Chat 1</h1>
                    <h1>Chris turk</h1>
                </div>
                <hr className="bg-white border-1" />
                <div className="flex items-center gap-8 my-3 mx-16">
                    <h1>Chat 1</h1>
                    <h1>Chris turk</h1>
                </div>
                <hr className="bg-white border-1" />
                <div className="flex items-center gap-8 my-3 mx-16">
                    <h1>Chat 1</h1>
                    <h1>Chris turk</h1>
                </div>
                <hr className="bg-white border-2" />
            </div>
        </div>
    );
}
