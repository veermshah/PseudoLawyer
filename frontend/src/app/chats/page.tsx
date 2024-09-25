"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChatRow from "../components/ChatRow";
import { Tilt } from "react-tilt";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Chats() {
    const router = useRouter();

    const defaultOptions = {
        reverse: false, // reverse the tilt direction
        max: 35, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    };

    return (
        <div>
            <Navbar />
            <div onClick={() => router.push("/chats/create")}>
                <Tilt
                    options={defaultOptions}
                    className="mt-10 ml-16 text-2xl barlow-black bg-white rounded-3xl py-5 w-fit px-5 text-center flex flex-col justify-center items-center cursor-pointer"
                >
                    <div className="flex items-center">
                        <IoIosAddCircleOutline size={40} className="mr-4" />
                        <h1> CREATE NEW CHAT</h1>
                    </div>
                </Tilt>
            </div>

            <div className="mt-10 text-white text-3xl barlow-bold ">
                <div>
                    <div className="grid grid-cols-4 gap-8 my-3 mx-16 items-center barlow-black">
                        <h1 className="text-left">Chat Number</h1>
                        <h1 className="text-left">Person</h1>
                        <h1 className="text-left">Last Message</h1>
                        <h1 className="text-right">Time Updated</h1>
                    </div>
                </div>
                <hr className="border-2 border-white" />
                <ChatRow
                    number={1}
                    name={"Turk"}
                    lastMessage={"HI"}
                    time={"September"}
                />
                <ChatRow
                    number={1}
                    name={"Turk"}
                    lastMessage={"HI"}
                    time={"September"}
                />
                <ChatRow
                    number={1}
                    name={"Turk"}
                    lastMessage={"HI"}
                    time={"September"}
                />
            </div>
        </div>
    );
}
