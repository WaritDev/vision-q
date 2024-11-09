import React from 'react';

const ElderVisionLanding: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-orange-600 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/iamges/family.png"
          alt="Elder family illustration"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/30 via-orange-600/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen p-6">
        {/* Header */}
        <h1 className="text-white text-4xl font-bold mb-auto">ElderVision</h1>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-end pb-8 space-y-6">
          <h2 className="text-white text-2xl font-bold text-center drop-shadow-lg">
            คุณเป็นผู้ดูแล<br />หรือผู้สูงอายุ
          </h2>
          
          {/* Buttons */}
          <div className="w-full max-w-xs space-y-4">
            <button className="w-full bg-orange-700 text-white py-4 rounded-lg font-bold transition-colors hover:bg-orange-800">
              ผู้สูงอายุ
            </button>
            <button className="w-full bg-white text-orange-600 py-4 rounded-lg font-bold transition-colors hover:bg-gray-100">
              ผู้ดูแล
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4">
        <div className="text-pink-400 text-4xl">♥</div>
      </div>
      <div className="absolute top-1/3 left-1/4">
        <div className="text-yellow-300 text-2xl">★</div>
      </div>
    </div>
  );
};

export default ElderVisionLanding;