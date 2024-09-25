"use client";
import { useCallback } from "react";
import Talk from "talkjs";
import { Session, Chatbox } from "@talkjs/react";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function Chat() {
    const router = useRouter();
    const syncUser = useCallback(
        () =>
            new Talk.User({
                id: "otherPerson",
                name: "Other Person",
                email: "otherPerson@example.com",
                photoUrl: "https://talkjs.com/new-web/avatar-2.jpg",
                welcomeMessage: "Hey, how can I help?",
            }),
        []
    );

    const syncConversation = useCallback((session: any) => {
        // JavaScript SDK code here
        const conversation = session.getOrCreateConversation("new_group_chat1");

        const Sudo = new Talk.User({
            id: "sudo",
            name: "Sudo",
            email: "sudo@example.com",
            photoUrl: "https://talkjs.com/new-web/avatar-1.jpg",
            welcomeMessage: "Hey, how can I help?",
        });

        const otherPerson = new Talk.User({
            id: "veer",
            name: "Veer",
            email: "veermickey@gmail.com",
            photoUrl: "https://talkjs.com/new-web/avatar-7.jpg",
            welcomeMessage: "Hi, I'm Veer!",
        });

        conversation.setParticipant(session.me);
        conversation.setParticipant(Sudo);
        conversation.setParticipant(otherPerson);

        return conversation;
    }, []);

    return (
        <Session appId="tFnmfonZ" syncUser={syncUser}>
            <div className="flex">
                <Chatbox
                    syncConversation={syncConversation}
                    className="w-1/2 h-screen"
                ></Chatbox>
                <div className=" flex flex-col w-1/2 mx-10 mt-10 h-[calc(100vh-40px)] overflow-y-auto">
                    <div className="bg-white h-5/6 rounded-3xl p-6 overflow-y-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam voluptatem omnis voluptatum suscipit facere est,
                        non aliquid sint adipisci autem facilis sequi inventore
                        molestiae cupiditate commodi quis, esse doloribus error
                        deleniti assumenda delectus tenetur! Magnam odit
                        voluptatibus architecto ut, molestias ipsa! Iste, sunt
                        aliquam! Iure ipsum facere iste ex quaerat commodi autem
                        corrupti sint incidunt et iusto tempora aut a
                        voluptates, cumque labore excepturi tenetur magnam modi!
                        Non vitae nam, eius consequatur sit voluptas officiis
                        iure facilis reiciendis quasi quo facere quas debitis
                        totam, harum, pariatur quis necessitatibus quos vero
                        enim cupiditate ducimus a error. Hic quos maiores
                        expedita nobis! cidunt et iusto tempora aut a
                        voluptates, cumque labore excepturi tenetur magnam modi!
                        Non vitae nam, eius consequatur sit voluptas officiis
                        iure facilis reiciendis quasi quo facere quas debitis
                        totam, harum, pariatur quis necessitatibus quos vero
                        enim cupiditate ducimus a error. Hic quos maiores
                        expedita nobis! cidunt et iusto tempora aut a
                        voluptates, cumque labore excepturi tenetur magnam modi!
                        Non vitae nam, eius consequatur sit voluptas officiis
                        iure facilis reiciendis quasi quo facere quas debitis
                        totam, harum, pariatur quis necessitatibus quos vero
                        enim cupiditate ducimus a error. Hic quos maiores
                        expedita nobis! cidunt et iusto tempora aut a
                        voluptates, cumque labore excepturi tenetur magnam modi!
                        Non vitae nam, eius consequatur sit voluptas officiis
                        iure facilis reiciendis quasi quo facere quas debitis
                        totam, harum, pariatur quis necessitatibus quos vero
                        enim cupiditate ducimus a error. Hic quos maiores
                        expedita nobis! cidunt et iusto tempora aut a
                        voluptates, cumque labore excepturi tenetur magnam modi!
                        Non vitae nam, eius consequatur sit voluptas officiis
                        iure facilis reiciendis quasi quo facere quas debitis
                        totam, harum, pariatur quis necessitatibus quos vero
                        enim cupiditate ducimus a error. Hic quos maiores
                        expedita nobis!cidunt et iusto tempora aut a voluptates,
                        cumque labore excepturi tenetur magnam modi! Non vitae
                        nam, eius consequatur sit voluptas officiis iure facilis
                        reiciendis quasi quo facere quas debitis totam, harum,
                        pariatur quis necessitatibus quos vero enim cupiditate
                        ducimus a error. Hic quos maiores expedita nobis!cidunt
                        et iusto tempora aut a voluptates, cumque labore
                        excepturi tenetur magnam modi! Non vitae nam, eius
                        consequatur sit voluptas officiis iure facilis
                        reiciendis quasi quo facere quas debitis totam, harum,
                        pariatur quis necessitatibus quos vero enim cupiditate
                        ducimus a error. Hic quos maiores expedita nobis!
                    </div>
                    <div className="flex text-white justify-evenly mt-8">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => router.back()}
                            className="h-fit cursor-pointer"
                        >
                            <FaArrowLeft size={50} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => router.push("/")}
                            className="h-fit cursor-pointer"
                        >
                            <FaHome size={50} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Session>
    );
}

export default Chat;
