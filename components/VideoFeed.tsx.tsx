import React from 'react';

const VideoFeed: React.FC = () => {
  return (
    <div className="bg-[#E5DCC3] p-4">
      <h2 className="text-xl font-semibold text-[#6B4423] mb-2">ภาพกล้องวงจรปิดภายในบ้าน</h2>
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img
          src="/images/cam.png"
          alt="Camera Feed"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default VideoFeed;