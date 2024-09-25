"use client";
import React from "react";
import { IoIosDocument } from "react-icons/io";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

export default function ContractTypeCard(props: any) {
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
        <motion.div whileTap={{ scale: 0.9 }} className="w-fit">
            <Tilt
                options={defaultOptions}
                style={{ height: 250, width: 250, cursor: "pointer" }}
                className="bg-white rounded-3xl py-10 w-72 text-center flex flex-col justify-center items-center "
            >
                <IoIosDocument size={"8rem"} color="black" />
                <h1 className="text-black barlow-semibold text-2xl">
                    {props.type}
                </h1>
            </Tilt>
        </motion.div>
    );
}
