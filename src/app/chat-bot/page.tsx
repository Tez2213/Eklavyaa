"use client";

import ChatbaseWidget from "@/components/ChatbaseWidget";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex flex-col items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-8 max-w-lg w-full text-center border border-white/20">
        <h1 className="text-4xl text-black font-extrabold  mb-4 drop-shadow-lg">
          Ask with <span className="text-indigo-400">Dronacharaya</span> 🤖
        </h1>
        <p className="text-gray-600 mb-6">
          Ask questions, learn concepts, or just explore ideas —  
          click the chat bubble at the bottom right to begin!
        </p>

        <div className="animate-bounce mt-6">
          <span className="px-6 py-2 bg-indigo-500/80 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg cursor-pointer">
            <button>Open Chat click on Bottom Icon</button>
          </span>
        </div>
      </div>

      {/* Chatbase Widget loads */}
      <ChatbaseWidget />
    </div>
  );
}
