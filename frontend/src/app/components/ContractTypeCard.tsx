"use client";
import React from "react";
import { IoIosDocument } from "react-icons/io";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

interface ContractTypeCardProps{
    type: string;
    onClick?: () => void;
    className?: string;
}

const ContractTypeCard: React.FC<ContractTypeCardProps> = ({ type, onClick, className }) => {
    const defaultOptions = {
      reverse: false,
      max: 35,
      perspective: 1000,
      scale: 1.1,
      speed: 1000,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    };
  
    return (
      <motion.div
        whileTap={{ scale: 0.9 }}
        className={`w-fit ${className}`}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <Tilt
          options={defaultOptions}
          style={{ height: 250, width: 250 }}
          className="bg-white rounded-3xl py-10 w-72 text-center flex flex-col justify-center items-center"
        >
          <IoIosDocument size={"8rem"} color="black" />
          <h1 className="text-black barlow-semibold text-2xl">{type}</h1>
        </Tilt>
      </motion.div>
    );
  };
  
  export default ContractTypeCard;
