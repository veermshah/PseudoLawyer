import React from "react";

export default function ChatRow(props: any) {
    return (
        <div>
            <hr className="bg-white border-2" />
            <div className="grid grid-cols-4 gap-8 my-3 mx-16 items-center">
                <h1 className="text-left">Chat {props.number}</h1>
                <h1 className="text-left">{props.name}</h1>
                <h1 className="text-left">{props.lastMessage}</h1>
                <h1 className="text-right">{props.time}</h1>
            </div>
        </div>
    );
}
