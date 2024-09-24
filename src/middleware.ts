// this one line applies auth to the entire project
export { default } from "next-auth/middleware";

export const config = { matcher: ["/chats", "/contracts"] };
