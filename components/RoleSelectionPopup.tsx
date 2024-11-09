"use client";

import React, { useState } from 'react';

const RoleSelectionPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleRoleSelection = (role: string) => {
    console.log(`Selected role: ${role}`);
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">เลือกสถานะของคุณ</h2>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-2 hover:bg-blue-600"
              onClick={() => handleRoleSelection('ผู้สูงอายุ')}
            >
              ผู้สูงอายุ
            </button>
            <button
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={() => handleRoleSelection('ผู้ดูแล')}
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