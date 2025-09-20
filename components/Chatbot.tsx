"use client";
import React, { useState, FormEvent } from "react";
import { Sparkles } from "lucide-react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_AWS_API_GATEWAY_INVOKE_URL}/chat`;

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState<Message[]>([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: "user", text: input.trim() };
    setMessage((prev) => [...prev, userMessage]);

    // Store the input before clearing it
    const currentInput = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      console.log("Sending request to:", API_ENDPOINT);
      console.log("Request payload:", { prompt: currentInput });

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: currentInput }),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(
          `API request failed: ${response.status} - ${errorText}`
        );
      }

      const data = await response.json();
      console.log("Response data:", data);

      const botMessage: Message = {
        sender: "bot",
        text: data.output.text || "Sorry, I couldn't process your request.",
      };
      setMessage((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        sender: "bot",
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
      };
      setMessage((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-4 w-72">
      <button className="bg-blue-900 rounded-lg w-12 h-12 flex justify-center items-center">
        <Sparkles className="text-slate-100" />
      </button>
      <div className="bg-white dark:bg-slate-800 shadow-sm rounded-lg overflow-hidden">
        <div className="chatbot-messages p-4 max-h-80 overflow-y-auto">
          {message.map((msg, index) => (
            <div key={index} className={`chatbot-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chatbot-form p-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
