"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const RoleSelectionPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);
  const router = useRouter();

  const handleRoleSelection = (role: string, path: string) => {
    console.log(`Selected role: ${role}`);
    setShowPopup(false);
    router.push(path);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-[#8B7355]/50 flex items-center justify-center">
          <div className="bg-[#F5F5F1] rounded-lg p-8 shadow-lg max-w-md w-full relative">
            <button 
              className="btn btn-circle btn-sm absolute right-2 top-2"
              onClick={handleClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex justify-center mb-6">
              <Image
                src="/images/family.png"
                alt="Family"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-[#6B4423] text-center">เลือกสถานะของคุณ</h2>
            <button
              className="w-full bg-[#A67B5B] text-white py-3 px-4 rounded mb-3 hover:bg-[#8B7355] transition duration-300 text-lg"
              onClick={() => handleRoleSelection('ผู้สูงอายุ', '/elder')}
            >
              ผู้สูงอายุ
            </button>
            <button
              className="w-full bg-[#8B7355] text-white py-3 px-4 rounded hover:bg-[#6B4423] transition duration-300 text-lg"
              onClick={() => handleRoleSelection('ผู้ดูแล', '/member')}
            >
              ผู้ดูแล
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RoleSelectionPopup;