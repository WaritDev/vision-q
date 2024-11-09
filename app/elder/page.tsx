"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Mic, Bell } from 'lucide-react';

const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = 'AIzaSyBY3FrOgqaaCFAFzE8dPvfV6Rv8opnowBU';

  const startRecording = () => {
    setIsRecording(true);
    // Here you would start the actual recording logic
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Here you would stop the actual recording logic
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between p-4">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-2">น้องหนีเนย</h1>
        <p className="text-lg text-gray-600">กดค้างปุ่มไมค์สีแดงเพื่อพูด</p>
      </div>

      <div className="relative w-64 h-64">
        <Image
          src="/images/family-ill.png"
          alt="Family Illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="w-full flex flex-col items-center">
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

        {isRecording && (
          <p className="text-xl font-semibold text-red-500 mb-4 animate-pulse">
            ไมค์กำลังทำงาน...
          </p>
        )}

        <div className="w-full flex justify-end">
          <button className="p-2 bg-white rounded-full shadow">
            <Bell size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}