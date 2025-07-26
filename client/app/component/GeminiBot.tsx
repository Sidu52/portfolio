"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import ChantBotGif from "@/public/assets/images/chatbot.gif";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";
import { userProfile } from "@/data/home";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const GeminiBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("gemini-chat-messages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(
          parsedMessages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          }))
        );
      } catch (error) {
        console.error("Failed to parse saved messages", error);
      }
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("gemini-chat-messages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAsk = async () => {
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: query,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setIsLoading(true);

    try {
      const res = await axios.post("/api/gemini_ai", {
        prompt: `
        You are an intelligent assistant representing Siddhant Sharma in a conversation with a recruiter.

        Your job is to respond politely, professionally, and confidently to any questions about Siddhant's skills, experience, background, and why he is a strong candidate.

        Always answer as if you're his personal assistant who knows everything about him.

        Candidate Profile:${userProfile} Recruiter's Question: ${query}
  `,
      });

      const botMessage: Message = {
        id: Date.now().toString(),
        text: res.data.message,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "Sorry, I couldn't process your request. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("gemini-chat-messages");
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-0 right-0 z-50 cursor-pointer rounded-full">
          <Image
            src={ChantBotGif}
            alt="Chatbot"
            className="w-56"
            onClick={handleToggle}
          />
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-md h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50 border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-[#011931] text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Ask About My Profile</h2>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded"
              >
                Clear
              </button>
              <button
                onClick={handleToggle}
                className="hover:bg-white/20 p-1 rounded"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                <FiMessageSquare size={48} className="mb-4 opacity-30" />
                <p>Ask me about my skills, experience, or projects</p>
                <p className="text-sm mt-2">
                  Try: "What projects have you worked on?"
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-[#011931] text-white rounded-br-none"
                          : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1 text-right">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <div className="flex space-x-2">
                        <div
                          className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <textarea
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#011931] focus:border-transparent resize-none"
                rows={2}
                placeholder="Type your question..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAsk();
                  }
                }}
                disabled={isLoading}
              />
              <button
                onClick={handleAsk}
                disabled={!query.trim() || isLoading}
                className={`self-end p-3 rounded-lg ${
                  !query.trim() || isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#011931] text-white hover:bg-[#011931]"
                }`}
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiBot;
