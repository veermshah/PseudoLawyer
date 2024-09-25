"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Navbar />
            <div className="mt-10 mx-16 flex flex-col gap-4 text-white">
                <h1 className="text-6xl  barlow-black mb-4">
                    WELCOME TO PSEUDOLAWYER
                </h1>
                <h1 className="text-4xl barlow-black">ABOUT</h1>
                <h1 className="text-2xl barlow-regular">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Optio, tenetur voluptas minima necessitatibus et libero
                    reprehenderit repellendus ipsam nihil? Aut amet doloribus
                    nulla reprehenderit optio animi maiores tempore sit dolore!
                </h1>
                <h1 className="text-4xl barlow-black">HOW IT WORKS</h1>
                <h1 className="text-2xl barlow-regular">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Optio, tenetur voluptas minima necessitatibus et libero
                    reprehenderit repellendus ipsam nihil? Aut amet doloribus
                    nulla reprehenderit optio animi maiores tempore sit dolore!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias aut corporis quia voluptatem natus animi ea.
                    Architecto aut provident sit eaque officiis, quasi laborum
                    commodi atque voluptates, culpa amet sunt.
                </h1>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }} // Duration in seconds
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        router.push("/register");
                    }}
                    className="text-4xl mt-16 barlow-black mx-auto hover:bg-white hover:text-secondary px-4 py-1 rounded-full w-fit cursor-pointer"
                >
                    CLICK TO GET STARTED
                </motion.div>
            </div>
        </>
    );
}
