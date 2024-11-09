"use client";

import React from 'react';
import Link from 'next/link';

const ElderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F1] flex flex-col items-center justify-center p-4">
      <div className="bg-[#E5DCC3] rounded-lg p-8 shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-[#6B4423] text-center">ยินดีต้อนรับ ผู้สูงอายุ</h1>
        <p className="text-[#8B7355] mb-6 text-center">
          ที่นี่คุณสามารถจัดการกิจกรรมและดูข้อมูลสุขภาพของคุณได้
        </p>
        <div className="space-y-4">
          <button className="w-full bg-[#A67B5B] text-white py-3 px-4 rounded hover:bg-[#8B7355] transition duration-300">
            ดูตารางกิจกรรม
          </button>
          <button className="w-full bg-[#8B7355] text-white py-3 px-4 rounded hover:bg-[#6B4423] transition duration-300">
            บันทึกข้อมูลสุขภาพ
          </button>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-[#6B4423] hover:underline">
            กลับไปหน้าเลือกบทบาท
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ElderPage;