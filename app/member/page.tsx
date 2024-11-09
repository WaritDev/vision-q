"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoFeed from '@/components/VideoFeed.tsx';
import NotificationList from '@/components/NotificationList';
import FooterNavigation from '@/components/FooterNavigation';
import { Notification } from '@/components/NotificationList';

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "หกล้มในห้องน้ำ",
    description: "ตรวจพบการหกล้มในห้องน้ำ กรุณาตรวจสอบโดยด่วน",
    priority: "emergency",
    time: "10:15 น.",
    bgColor: "bg-red-100",
    borderColor: "border-red-500",
    textColor: "text-red-800"
  },
  {
    id: 2,
    title: "เดินสะดุดบันได",
    description: "ตรวจพบการสะดุดที่บันไดชั้น 1 มีการเสียการทรงตัว",
    priority: "high-risk",
    time: "09:45 น.",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-800"
  },
  {
    id: 3,
    title: "ลื่นในห้องครัว",
    description: "พบการลื่นในห้องครัว เนื่องจากพื้นเปียก",
    priority: "risk",
    time: "09:30 น.",
    bgColor: "bg-green-100",
    borderColor: "border-green-500",
    textColor: "text-green-800"
  }
];

const MemberPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [newNotification, setNewNotification] = useState<Notification>({
    id: 0,
    title: "",
    description: "",
    priority: "risk",
    time: "",
    bgColor: "bg-green-100",
    borderColor: "border-green-500",
    textColor: "text-green-800"
  });

  const handleAddNotification = () => {
    if (newNotification.title && newNotification.description) {
      setNotifications([
        {
          ...newNotification,
          id: notifications.length + 1,
          time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) + ' น.'
        },
        ...notifications
      ]);
      setNewNotification({
        id: 0,
        title: "",
        description: "",
        priority: "risk",
        time: "",
        bgColor: "bg-green-100",
        borderColor: "border-green-500",
        textColor: "text-green-800"
      });
    }
  };

  const handleDeleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F1]">
      <div className="flex-none">
        <Header />
        <VideoFeed />
      </div>

      <div className="flex-grow overflow-y-auto">
        <div className="container mx-auto px-4 py-4 max-w-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="หัวข้อการแจ้งเตือน"
              value={newNotification.title}
              onChange={(e) => setNewNotification({...newNotification, title: e.target.value})}
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              placeholder="รายละเอียดการแจ้งเตือน"
              value={newNotification.description}
              onChange={(e) => setNewNotification({...newNotification, description: e.target.value})}
              className="w-full p-2 mb-2 border rounded"
            />
            <select
              value={newNotification.priority}
              onChange={(e) => {
                const priority = e.target.value;
                let bgColor, borderColor, textColor;
                switch (priority) {
                  case "emergency":
                    bgColor = "bg-red-100";
                    borderColor = "border-red-500";
                    textColor = "text-red-800";
                    break;
                  case "high-risk":
                    bgColor = "bg-yellow-100";
                    borderColor = "border-yellow-500";
                    textColor = "text-yellow-800";
                    break;
                  default:
                    bgColor = "bg-green-100";
                    borderColor = "border-green-500";
                    textColor = "text-green-800";
                }
                setNewNotification({...newNotification, priority, bgColor, borderColor, textColor});
              }}
              className="w-full p-2 mb-2 border rounded"
            >
              <option value="risk">มีความเสี่ยง</option>
              <option value="high-risk">ความเสี่ยงสูง</option>
              <option value="emergency">ฉุกเฉิน</option>
            </select>
            <div 
              onClick={handleAddNotification}
              className="w-full p-2 text-center bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
            >
              เพิ่มการแจ้งเตือน
            </div>
          </div>
          <NotificationList notifications={notifications} onDelete={handleDeleteNotification} />
        </div>
      </div>

      <FooterNavigation />
    </div>
  );
};

export default MemberPage;