import React from "react";
import Navbar from "../components/Navbar";
import ChatRow from "../components/ChatRow";

export default function Chats() {
    return (
        <div>
            <Navbar />
            <div className="mt-10 text-white text-3xl barlow-bold ">
                <div>
                    <div className="grid grid-cols-4 gap-8 my-3 mx-16 items-center barlow-black">
                        <h1 className="text-left">Chat Number</h1>
                        <h1 className="text-left">Person</h1>
                        <h1 className="text-left">Last Message</h1>
                        <h1 className="text-right">Time Updated</h1>
                    </div>
                </div>
                <hr className="border-2 border-white"/>
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
