"use client";

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { useState } from "react";

const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = 'AIzaSyBY3FrOgqaaCFAFzE8dPvfV6Rv8opnowBU';

export default function ElderChatbot() {
  const [response, setResponse] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");

  const handleChat = async (prompt: string) => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const config = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const chat = model.startChat({
      generationConfig: config,
      history: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const result = await chat.sendMessage(prompt);
    setResponse(result.response.text());
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleChat(userInput);
    setUserInput("");
  };

  return (
    <div className="flex flex-col items-center p-8">
      <form onSubmit={onSubmit} className="w-full max-w-lg">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="border p-2 w-full rounded mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </form>
      {response && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
