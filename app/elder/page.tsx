"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Mic, Bell } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = 'AIzaSyBY3FrOgqaaCFAFzE8dPvfV6Rv8opnowBU';

export default function ElderChatbot() {
  const [isRecording, setIsRecording] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => { 
    setIsRecording(false);
  };

  const saveResponse = (text: string) => {
    // ฟังก์ชันสำหรับบันทึกหรือจัดการข้อความ
    console.log("Saving response:", text);
    // คุณสามารถเพิ่มโค้ดเพื่อบันทึกลงฐานข้อมูลหรือทำอย่างอื่นได้ที่นี่
  };

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
    const reply = result.response.text(); // เก็บข้อความที่ตอบกลับมาในตัวแปร reply
    setResponse(reply);
    saveResponse(reply); // เรียกใช้ฟังก์ชัน saveResponse เพื่อทำอย่างอื่นกับข้อความที่ตอบกลับมา
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleChat(userInput);
    setUserInput("");
    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between p-4">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-2">น้องหนีเนย</h1>
        <p className="text-lg text-gray-600">กดค้างปุ่มไมค์สีแดงเพื่อพูด</p>
      </div>

      {response && (
        <div className="mt-4 bg-brown-400 text-white p-4 rounded shadow w-3/4 text-center">
          <p>{response}</p>
        </div>
      )}

      <div className="relative w-64 h-64 mt-4">
        <Image
          src="/images/family-ill.png"
          alt="Family Illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="w-full flex flex-col items-center mt-4">
        <button
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          onTouchStart={startRecording}
          onTouchEnd={stopRecording}
          className={`w-40 h-40 rounded-full flex items-center justify-center
            ${isRecording ? 'bg-red-600' : 'bg-red-500'}
            text-white mb-4 transition-all duration-300 ease-in-out
            ${isRecording ? 'scale-110 shadow-lg' : 'scale-100 shadow'}
            active:scale-95`}
        >
          <Mic size={80} className={`${isRecording ? 'animate-pulse' : ''}`} />
        </button>

        <form onSubmit={onSubmit} className="w-full max-w-lg">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="พิมพ์ข้อความของคุณ..."
            className="border p-2 w-full rounded mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            ส่งข้อความ
          </button>
        </form>

        <div className="w-full flex justify-end mt-4">
          <button className="p-2 bg-white rounded-full shadow">
            <Bell size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
