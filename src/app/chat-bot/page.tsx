'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BottomNav from "@/components/ui/BottomNav";
import { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Bot, 
  User, 
  Trophy, 
  Sparkles,
  MessageCircle,
  Brain,
  Lightbulb
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI learning assistant. I'm here to help you with your studies, answer questions, and guide you through your learning journey. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Let me help you understand this concept better.",
        "I can see you're working hard on your studies. Here's what I suggest...",
        "Excellent! You're making great progress. Let me explain this in a simple way.",
        "That's an interesting topic! Here's how we can break it down step by step.",
        "I'm here to help you succeed! Let's explore this together.",
        "Great thinking! Here's another way to look at this problem.",
        "You're on the right track! Let me provide some additional insights."
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Fixed Header Section */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-yellow-50/95 backdrop-blur-md border-b border-yellow-200/50 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <motion.h1 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Chat Bot
                </motion.h1>
                <motion.p 
                  className="text-yellow-700 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Ready to help</span>
                  </span>
                </motion.p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-3 py-1">
                  🔥  3
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Badge className="bg-[#ffce3b] text-white px-3 py-1">
                  <Trophy className="w-3 h-3 mr-1" />
                  450
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Avatar className="w-8 h-8 bg-[#ffce3b]">
                  <AvatarFallback className="bg-[#ffce3b] text-white font-semibold text-sm">
                    <img src={'https://avatar.iran.liara.run/public/8'} alt="Avatar" />
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chat Area */}
      <div className="relative z-10 px-4 pt-24 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Chat Messages */}
          <div className="space-y-4 mb-6">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isUser ? 'bg-[#ffce3b]' : 'bg-yellow-200'
                  }`}>
                    {message.isUser ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-yellow-700" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <motion.div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-[#ffce3b] text-white rounded-br-md'
                        : 'bg-white border border-yellow-200 text-gray-800 rounded-bl-md shadow-sm'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.isUser ? 'text-yellow-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-yellow-700" />
                  </div>
                  <div className="bg-white border border-yellow-200 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <motion.div
        className="fixed bottom-16 left-0 right-0 bg-yellow-50/95 backdrop-blur-md border-t border-yellow-200/50 px-4 py-4 z-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            {/* Quick Action Buttons */}
            <div className="hidden md:flex space-x-2">
              <motion.button
                className="p-2 bg-yellow-100 hover:bg-yellow-200 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setInputMessage("Help me with math problems")}
              >
                <Brain className="w-4 h-4 text-yellow-700" />
              </motion.button>
              <motion.button
                className="p-2 bg-yellow-100 hover:bg-yellow-200 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setInputMessage("Explain a science concept")}
              >
                <Lightbulb className="w-4 h-4 text-yellow-700" />
              </motion.button>
            </div>

            {/* Input Field */}
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your studies..."
                className="w-full px-4 py-3 pr-12 bg-white border border-yellow-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ffce3b] focus:border-transparent placeholder-gray-500"
                disabled={isTyping}
              />
              <motion.button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === "" || isTyping}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#ffce3b] hover:bg-yellow-500 disabled:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: inputMessage.trim() ? 1.1 : 1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Suggested Questions */}
          <motion.div
            className="mt-3 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              "Help with homework",
              "Explain a concept"
            ].map((suggestion, index) => (
              <motion.button
                key={suggestion}
                onClick={() => setInputMessage(suggestion)}
                className="px-3 py-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 text-xs rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                {suggestion}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <BottomNav currentPage="chatbot" />
    </div>
  );
}
