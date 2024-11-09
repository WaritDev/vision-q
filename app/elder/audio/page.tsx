"use client";
// app/elder/page.tsx
import React, { useState } from 'react';
import { generateAudioCaption, AudioCaptionResponse } from '../../../utils/api';

const ElderPage = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateCaption = async () => {
    if (!audioFile) {
      setError('โปรดอัพโหลดไฟล์เสียง');
      return;
    }

    try {
      const response: AudioCaptionResponse = await generateAudioCaption(audioFile);
      setCaption(response.content.join(' '));
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setCaption(null);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">ระบบพูดคุยกับผู้สูงอายุ</h1>
      
      <div className="mb-4">
        <label className="block mb-2">อัพโหลดไฟล์เสียง:</label>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setAudioFile(e.target.files[0]);
            }
          }}
          className="border p-2 w-full"
        />
      </div>
      
      <button
        onClick={handleGenerateCaption}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        แปลข้อความ
      </button>
      
      {caption && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <h2 className="text-xl">คำแปล:</h2>
          <p>{caption}</p>
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default ElderPage;