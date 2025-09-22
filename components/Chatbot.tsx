"use client";
import React, { useState, FormEvent } from "react";
import { Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const Chatbot: React.FC = () => {
  if (!process.env.NEXT_PUBLIC_AWS_API_GATEWAY_INVOKE_URL) {
    console.error("NEXT_PUBLIC_AWS_API_GATEWAY_INVOKE_URL is not defined.");
    return <></>;
  }

  const API_ENDPOINT = `${process.env.NEXT_PUBLIC_AWS_API_GATEWAY_INVOKE_URL}/chat`;

  const [message, setMessage] = useState<Message[]>([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

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

      // console.log("Response status:", response.status);
      // console.log("Response ok:", response.ok);

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
    <div className="fixed bottom-4 right-4 flex items-end flex-col-reverse gap-4 w-72">
      <Button
        size="icon"
        className="bg-blue-900 hover:bg-blue-800  text-slate-100"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <Sparkles fill="currentColor" size={64} />
      </Button>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transformOrigin: "bottom right",
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Card className="shadow-lg bg-background">
              <CardContent className="p-0">
                <div className="chatbot-messages p-4 max-h-80 overflow-y-auto bg-muted">
                  {message.map((msg, index) => (
                    <div
                      key={index}
                      className={`chatbot-message ${
                        msg.sender
                      } mb-2 p-2 rounded ${
                        msg.sender === "user"
                          ? "bg-blue-100 dark:bg-blue-900 ml-4"
                          : "bg-gray-100 dark:bg-gray-700 mr-4"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="p-2 flex gap-2">
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1 text-slate-700"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    size="icon"
                    className="shrink-0 text-slate-100"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full border-b-2 border-white" />
                    ) : (
                      <Send color="currentColor" fill="currentColor" />
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
