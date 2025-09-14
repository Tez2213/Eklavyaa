"use client";

import { usePathname } from "next/navigation";
import ChatbaseWidget from "./ChatbaseWidget";

export default function ChatbotWrapper() {
  const pathname = usePathname();
  const excludedPaths = ["/login", "/signin", "/"];
  const showChatbot = !excludedPaths.includes(pathname);

  if (!showChatbot) return null;

  return <ChatbaseWidget />;
}
