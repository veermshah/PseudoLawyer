"use client";
import { useCallback, useEffect, useState } from "react";
import Talk from "talkjs";
import { Session, Chatbox } from "@talkjs/react";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

function Chat() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [conversationId, setConversationId] = useState("");
    const otherPersonName = searchParams.get("otherPersonName"); // Get 'name' parameter
    const otherPersonEmail = searchParams.get("otherPersonEmail"); // Get 'email' parameter
    const yourname = searchParams.get("yourname"); // Get 'yourname' parameter
    const youremail = searchParams.get("youremail"); // Get 'youremail' parameter

    useEffect(() => {
        const tempConversationId =
            (otherPersonEmail ?? "") > (youremail ?? "")
                ? `talkjs-chat-${otherPersonEmail}-${youremail}`
                : `talkjs-chat-${youremail}-${otherPersonEmail}`;

        // Update the conversationId in state for other uses if necessary
        setConversationId(tempConversationId);
        console.log(`talkjs-chat-${otherPersonEmail}`);
    }, [otherPersonEmail, youremail]);

    const syncUser = useCallback(
        () =>
            new Talk.User({
                id: `${youremail}`,
                name: `${yourname}`,
                email: `${youremail}`,
                photoUrl: "https://talkjs.com/new-web/avatar-7.jpg",
                welcomeMessage: `Hi, I'm ${yourname}!`,
            }),
        [yourname, youremail]
    );

    const syncConversation = useCallback(
        (session: any) => {
            const tempConversationId =
                (otherPersonEmail ?? "") > (youremail ?? "")
                    ? `talkjs-chat-${otherPersonEmail}-${youremail}`
                    : `talkjs-chat-${youremail}-${otherPersonEmail}`;

            // Directly use tempConversationId instead of conversationId from state
            const conversation = session.getOrCreateConversation(tempConversationId);

            const Sudo = new Talk.User({
                id: "sudo",
                name: "Sudo",
                email: "sudo@example.com",
                photoUrl: "https://talkjs.com/new-web/avatar-1.jpg",
                welcomeMessage:
                    "Hey, I'm Sudo. I'll be helping the two of you draft a contract. Can I get both of your names?",
            });

            const otherPerson = new Talk.User({
                id: `${otherPersonEmail}`,
                name: `${otherPersonName}`,
                email: `${otherPersonEmail}`,
                photoUrl: "https://talkjs.com/new-web/avatar-2.jpg",
                welcomeMessage: "Hey, how can I help?",
            });

            conversation.setParticipant(session.me);
            conversation.setParticipant(Sudo);
            conversation.setParticipant(otherPerson);

            return conversation;
        },
        [otherPersonEmail, otherPersonName, youremail]
    );

    return (
        <Session appId="tFnmfonZ" syncUser={syncUser}>
            <div className="flex ml-3">
                <Chatbox syncConversation={syncConversation} className="w-1/2 h-screen"></Chatbox>
                <div className="flex flex-col w-1/2 mx-10 mt-10 h-[calc(100vh-40px)] overflow-y-auto">
                    <div className="bg-white h-5/6 rounded-3xl p-6 overflow-y-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis consectetur ipsum suscipit molestiae earum cupiditate, corrupti reprehenderit fugit non, repellendus at nam impedit culpa fuga accusamus, unde minima explicabo facere! Nesciunt voluptas ratione officia tenetur sit iste. Excepturi laudantium consequatur quibusdam reprehenderit omnis, dolorem aliquid. Assumenda, modi dolores sequi nisi dolorum minus, ut, velit optio facere molestiae quis! Libero, distinctio. Commodi ipsa delectus ipsam quod repellat dignissimos iure quidem doloremque iusto nisi, ullam fugit qui molestiae atque, velit sunt beatae sequi. Sit inventore dignissimos quidem totam! Labore dignissimos accusantium deleniti est explicabo quasi qui provident architecto quos. Molestias magnam cum totam, dignissimos facilis impedit aperiam laudantium, incidunt laborum commodi, aut nostrum esse soluta laboriosam alias dolor modi doloribus quis similique. Iure, vel animi. Laboriosam voluptatibus nihil, omnis quo reiciendis et quasi sed dignissimos id similique, assumenda qui voluptas dolore. Nesciunt, recusandae consectetur ipsa vitae modi sit quae nemo id eum. Inventore dolore distinctio quia nulla earum dignissimos quis, molestiae voluptatum eveniet numquam et velit eum dolorem neque maiores fugit modi enim qui unde reiciendis iste! Reprehenderit ipsam eligendi obcaecati? Exercitationem aliquam esse tenetur vel reiciendis cupiditate impedit, debitis maxime a natus qui est similique cum dolorem? Ea voluptate, dolorem, nemo laboriosam asperiores officia temporibus natus, veritatis sint aut ipsam. Nostrum sapiente, neque quia sed saepe commodi magni! Minus autem delectus dicta dolorum! Velit, itaque inventore, necessitatibus debitis eum fugiat quo voluptate tempore rem tempora error veniam deserunt perspiciatis voluptas nobis suscipit maiores, modi ipsa neque magni odit fuga. Corporis deserunt sint blanditiis aut! Aspernatur at voluptatem eos laborum odit, exercitationem quae corporis quasi adipisci vel accusantium, iste velit ducimus. Nulla odio quae placeat et aut veritatis nemo officiis ipsa quisquam perspiciatis? Vel dolore nisi dolores enim commodi facilis debitis, nam, fugiat numquam quisquam reiciendis praesentium possimus nulla omnis doloribus, illo minima ad veritatis culpa aperiam voluptates quia? Tempora temporibus, quasi veniam placeat est modi aliquam non illo facere consectetur similique pariatur. Quasi delectus tenetur excepturi mollitia nesciunt dolore doloribus, eos debitis ipsum commodi deleniti iusto vero aliquid adipisci iste ipsam. Nostrum incidunt, obcaecati necessitatibus dolore beatae voluptatibus amet aliquam, molestias deserunt sint corporis iste doloremque ab nobis atque repudiandae hic veritatis reprehenderit repellendus ipsa quam. Fuga earum ex, autem inventore eum quisquam impedit error possimus ea et repudiandae suscipit unde minima consequuntur, expedita voluptates vero velit, amet porro aliquam quaerat perspiciatis vitae facilis! Fugit porro aperiam nesciunt facere possimus non delectus incidunt architecto asperiores quisquam nemo libero vero, nostrum laudantium, cumque dolores sed ratione odio? Voluptatum, fugit tenetur laborum error aliquam, at laboriosam exercitationem temporibus reprehenderit quam vero! Autem illo nulla obcaecati vero nemo maxime ut similique ad totam repellendus in debitis voluptatum, possimus repudiandae? Repellendus qui totam nisi nostrum illum? Neque, est. Hic magni eos recusandae molestiae nam necessitatibus ab nisi. Velit itaque esse earum, cumque libero accusantium iure, perferendis quod reprehenderit temporibus, quis et sequi alias at eligendi repellat quos blanditiis aut illum! Laudantium, amet inventore culpa sequi natus exercitationem? Doloribus provident quia eveniet laborum temporibus eligendi!
                        {/* Placeholder text */}
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
